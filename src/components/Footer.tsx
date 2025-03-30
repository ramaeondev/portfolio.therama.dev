
import { Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Contact from Website");
    const body = encodeURIComponent("Hello Rama,\n\nI'd like to get in touch with you regarding...");
    window.location.href = `mailto:ramaeon.dev@gmail.com?subject=${subject}&body=${body}`;
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
              <a href="https://github.com/ramaeon" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a 
                href="#" 
                onClick={handleEmailClick} 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
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
