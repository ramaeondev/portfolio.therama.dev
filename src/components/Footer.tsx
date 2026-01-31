
import { Github, Mail, Twitter, Linkedin } from "lucide-react";
import useSocialLinks from "../hooks/useSocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Contact from Website");
    const body = encodeURIComponent("Hello Rama,\n\nI'd like to get in touch with you regarding...");
    window.location.href = `mailto:rama@therama.dev?subject=${subject}&body=${body}`;
  };

  // load social links from Appwrite
  const { links, loading } = useSocialLinks();

  const renderLinks = () => {
    // loading indicator
    if (loading) {
      return (
        <div className="flex items-center space-x-3">
          <div className="h-5 w-5 rounded-full border-2 border-muted border-t-primary animate-spin" />
        </div>
      );
    }

    if (!links || !Array.isArray(links) || links.length === 0) {
      // fallback to static links (manually added)
      return (
        <>
          <a
            href="https://github.com/ramaeon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href="https://twitter.com/ramaeon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Twitter"
            title="Twitter"
          >
            <Twitter size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/ramaeon/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://www.npmjs.com/~ramaeon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
            aria-label="npm"
            title="npm"
          >
            <span className="inline-flex items-center justify-center rounded px-2 py-1 text-xs font-semibold bg-muted text-foreground">npm</span>
          </a>
        </>
      );
    }

    const renderIcon = (link: any) => {
      const platform = (link.platform || '').toLowerCase();
      const href = link.url || '';

      if (/github/.test(platform) || href.includes('github.com')) return <Github size={20} />;
      if (/twitter/.test(platform) || href.includes('twitter.com')) return <Twitter size={20} />;
      if (/linkedin/.test(platform) || href.includes('linkedin.com')) return <Linkedin size={20} />;
      if (/mail|email|mailto/.test(platform) || href.startsWith('mailto:')) return <Mail size={20} />;

      // npm icon fallback (no lucide icon) -> show small npm badge
      if (/npm/.test(platform) || href.includes('npmjs.com')) {
        return <span className="inline-flex items-center justify-center rounded px-2 py-1 text-xs font-semibold bg-muted text-foreground">npm</span>;
      }

      // If a FontAwesome class is present, render a generic <i> element (user can add FA if desired)
      if (link.icon) return <i className={link.icon} aria-hidden />;

      // default to display name (short)
      return <span className="text-sm">{link.display_name ?? platform}</span>;
    };

    const rendered = links.map((link) => {
      const key = link.$id ?? link.platform ?? link.url;
      const href = link.url ?? '#';
      const label = link.display_name ?? link.platform ?? href;

      // Use mailto for email entries
      const realHref = (/mail|email|mailto/i).test(link.platform || '') || href.startsWith('mailto:') ? (href.startsWith('mailto:') ? href : `mailto:${href}`) : href;

      return (
        <a key={key}
          href={realHref}
          target={realHref.startsWith('http') ? '_blank' : undefined}
          rel={realHref.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label={label}
        >
          {renderIcon(link)}
        </a>
      );
    });

    // Ensure there's always a contact email link (manual) if API doesn't provide one
    const hasEmail = links.some((l: any) => (/mail|email|mailto/i).test(l.platform || '') || (l.url || '').startsWith('mailto:'));

    if (!hasEmail) {
      rendered.push(
        <a key="manual-email"
          href={`mailto:rama@therama.dev`}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email"
          title="Email"
        >
          <Mail size={20} />
        </a>
      );
    }

    return rendered;
  };
  
  return (
    <footer className="bg-background border-t border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-foreground font-bold text-2xl flex items-center">
              <span className="text-angular-primary">A</span>ngular<span className="text-primary">Dev</span>
            </a>
            <p className="text-muted-foreground mt-2">Building exceptional web experiences.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              {renderLinks()}
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Rama Subba Reddy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
