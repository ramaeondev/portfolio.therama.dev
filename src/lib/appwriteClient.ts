const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT as string | undefined;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID as string | undefined;
const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID as string | undefined;
const apiKey = import.meta.env.VITE_APPWRITE_API_KEY as string | undefined; // optional

export type SocialLink = {
  $id?: string;
  platform?: string;
  url?: string;
  icon?: string;
  display_name?: string;
  order?: number;
  is_active?: boolean;
};

export async function getSocialLinks(): Promise<SocialLink[]> {
  if (!endpoint || !projectId || !databaseId) {
    console.warn('Appwrite environment not configured (VITE_APPWRITE_ENDPOINT/VITE_APPWRITE_PROJECT_ID/VITE_APPWRITE_DATABASE_ID)');
    return [];
  }

  const url = `${endpoint.replace(/\/$/, '')}/databases/${databaseId}/collections/social_links/documents`;

  try {
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Appwrite-Project': projectId,
        ...(apiKey ? { 'X-Appwrite-Key': apiKey } : {}),
      },
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => '');
      console.error('Appwrite fetch failed', resp.status, text);
      return [];
    }

    const data = await resp.json().catch(() => ({}));
    const docs = Array.isArray(data.documents) ? data.documents : [];

    return docs
      .filter((d: any) => d.is_active)
      .sort((a: any, b: any) => (a.order ?? 0) - (b.order ?? 0))
      .map((d: any) => ({
        $id: d.$id,
        platform: d.platform,
        url: d.url,
        icon: d.icon,
        display_name: d.display_name,
        order: d.order,
        is_active: d.is_active,
      }));
  } catch (err) {
    console.error('Error fetching social links from Appwrite (fetch)', err);
    return [];
  }
}
