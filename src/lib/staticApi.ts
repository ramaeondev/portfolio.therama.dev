// Read-only access to public reference data on the self-hosted Supabase backend
// (schema "static" at https://api-v3.therama.dev). No login needed.
// The publishable key is meant to be public; the backend only allows SELECT on this schema.

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string | undefined) ?? 'https://api-v3.therama.dev';
const SUPABASE_PUBLISHABLE_KEY =
  (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined) ??
  'sb_publishable_TvfycUXoZ1whU1e-L8qhH-_PwN2YmxB';

async function selectStatic<T>(table: string, query: string): Promise<T[]> {
  const url = `${SUPABASE_URL.replace(/\/$/, '')}/rest/v1/${table}?${query}`;
  const resp = await fetch(url, {
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      'Accept-Profile': 'static',
    },
  });
  if (!resp.ok) {
    throw new Error(`static.${table}: ${resp.status} ${await resp.text().catch(() => '')}`);
  }
  return resp.json();
}

export type SocialLink = {
  $id?: string;
  platform?: string;
  url?: string;
  icon?: string;
  display_name?: string;
  order?: number;
  is_active?: boolean;
};

type SocialLinkRow = {
  id: string;
  platform: string;
  url: string;
  icon: string;
  display_name: string;
  sort_order: number;
  is_active: boolean;
};

export async function getSocialLinks(): Promise<SocialLink[]> {
  try {
    const rows = await selectStatic<SocialLinkRow>(
      'social_links',
      'select=id,platform,url,icon,display_name,sort_order,is_active&is_active=eq.true&order=sort_order.asc',
    );
    return rows.map((r) => ({
      $id: r.id,
      platform: r.platform,
      url: r.url,
      icon: r.icon,
      display_name: r.display_name,
      order: r.sort_order,
      is_active: r.is_active,
    }));
  } catch (err) {
    console.error('Error fetching social links', err);
    return [];
  }
}
