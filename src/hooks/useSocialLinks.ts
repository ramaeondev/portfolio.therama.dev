import { useEffect, useState } from 'react';
import { getSocialLinks } from '../lib/appwriteClient';

export type SocialLink = {
  $id?: string;
  platform?: string;
  url?: string;
  icon?: string; // optional icon name or class
  display_name?: string;
  order?: number;
  is_active?: boolean;
};

export default function useSocialLinks() {
  const [links, setLinks] = useState<SocialLink[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setLoading(true);
      const res = await getSocialLinks();
      if (!mounted) return;
      setLinks(res as SocialLink[]);
      setLoading(false);
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  return { links, loading };
}
