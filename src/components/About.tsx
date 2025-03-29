import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    // Angular
    { name: "Angular", category: "framework" },
    { name: "TypeScript", category: "language" },
    { name: "RxJS", category: "library" },
    { name: "NgRx", category: "state" },
    { name: "Angular Material", category: "ui" },
    
    // Other Frontend
    { name: "HTML", category: "language" },
    { name: "CSS/SCSS", category: "language" },
    { name: "JavaScript", category: "language" },
    { name: "Bootstrap", category: "ui" },
    
    
    // Testing & Tools
    { name: "Jasmine", category: "testing" },
    { name: "Karma", category: "testing" },
    { name: "Jest", category: "testing" },
    { name: "Git", category: "tool" },
    { name: "Github Actions", category: "tool" },
    { name: "SonarQube", category: "ui" },
    
    // Backend & Other
    { name: "FastApi", category: "backend" },
    { name: "Bloomreach CMS.", category: "backend" },
    { name: "RESTful APIs", category: "backend" },
    { name: "Websockets", category: "database" },
    { name: "PostgreSQL", category: "database" },
  ];

  return (
    <section id="about" className="bg-secondary/20 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm a passionate Angular developer with a strong foundation in frontend technologies and a knack for creating intuitive user experiences. With 6+ years of experience in web development, I've become adept at turning complex problems into elegant solutions.
              </p>
              <p>
                My journey in tech began at Jawaharlal Technological University, Anantapur, where I earned my B.Tech in Electronics. Since then, I've worked with various companies ranging from startups to large enterprises, contributing to projects that have impacted thousands of users.
              </p>
              <p>
                Beyond coding, I enjoy sharing my knowledge through technical articles and community discussions. I'm constantly learning new technologies and exploring ways to improve my craft.
              </p>
              <p>
                When I'm not in front of a computer, you’ll find me watching movies, catching up on TV shows, or enjoying a game of cricket.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden card-hover">
              <div className="absolute top-0 right-0 h-20 w-20 bg-angular-primary/30 rounded-bl-full z-0"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill.name} 
                      variant="secondary" 
                      className={`
                        ${skill.category === "framework" ? "bg-angular-primary/20 hover:bg-angular-primary/30" : ""}
                        ${skill.category === "language" ? "bg-primary/20 hover:bg-primary/30" : ""}
                        ${skill.category === "library" || skill.category === "state" ? "bg-accent/20 hover:bg-accent/30" : ""}
                        ${skill.category === "ui" ? "bg-muted hover:bg-muted/80" : ""}
                        ${skill.category === "testing" ? "bg-green-500/20 hover:bg-green-500/30" : ""}
                        ${skill.category === "tool" ? "bg-yellow-500/20 hover:bg-yellow-500/30" : ""}
                        ${skill.category === "backend" || skill.category === "database" ? "bg-purple-500/20 hover:bg-purple-500/30" : ""}
                      `}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
