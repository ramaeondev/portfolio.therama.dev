
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = "https://personal-docs-rama.s3.ap-south-2.amazonaws.com/resume/Rama_Subba_Reddy_Vennapusa_April2025.docx";
    
    // Create an anchor element and trigger the download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'Rama_Subba_Reddy_Vennapusa_Resume.docx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download started",
      description: "Your CV download has started.",
      duration: 3000,
    });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="#" className="text-foreground font-bold text-2xl flex items-center">
              <span className="text-angular-primary">A</span>ngular<span className="text-primary">Dev</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="default" 
                size="sm" 
                className="ml-4 bg-accent hover:bg-accent/90 flex items-center gap-2"
                onClick={handleDownloadCV}
              >
                <Download size={16} />
                Resume
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="ml-3 mt-2 bg-accent hover:bg-accent/90 flex items-center gap-2"
              onClick={handleDownloadCV}
            >
              <Download size={16} />
              Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
