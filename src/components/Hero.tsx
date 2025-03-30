
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/70"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-angular-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-accent font-mono mb-4">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Rama Subba Reddy</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-muted-foreground">
            I build things with Angular
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          I'm a software engineer passionate about creating exceptional digital experiences. Right now, I'm focused on building accessible, user-centered products with Angular and modern web technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex gap-6 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
