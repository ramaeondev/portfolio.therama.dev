
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Building2, ExternalLink } from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  companyUrl?: string;
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState("exp1");
  
  const experiences: ExperienceItem[] = [
    {
      id: "exp1",
      role: "Senior Angular Developer",
      company: "TechCorp Solutions",
      period: "Jan 2022 - Present",
      description: [
        "Led a team of 5 developers to rebuild the company's flagship product using Angular 15, resulting in a 40% improvement in performance.",
        "Implemented state management with NgRx, reducing data fetching redundancy and improving user experience.",
        "Created reusable UI components following the company's design system, which reduced development time by 25%.",
        "Mentored junior developers through code reviews and pair programming sessions."
      ],
      technologies: ["Angular 15", "TypeScript", "NgRx", "RxJS", "Jasmine", "Karma"],
      companyUrl: "#"
    },
    {
      id: "exp2",
      role: "Frontend Developer",
      company: "WebSoft Systems",
      period: "Jun 2019 - Dec 2021",
      description: [
        "Developed and maintained multiple Angular applications for enterprise clients.",
        "Integrated REST APIs and implemented responsive designs using Angular Material.",
        "Collaborated with UX designers to improve user interface and accessibility.",
        "Participated in agile development processes, including daily stand-ups and sprint planning."
      ],
      technologies: ["Angular 9-12", "TypeScript", "Angular Material", "SCSS", "RESTful APIs"],
      companyUrl: "#"
    },
    {
      id: "exp3",
      role: "Junior Web Developer",
      company: "Creative Digital Agency",
      period: "Sep 2017 - May 2019",
      description: [
        "Built responsive websites and web applications for various clients using Angular and other frontend technologies.",
        "Worked closely with designers to translate UI/UX wireframes into functional components.",
        "Optimized applications for maximum speed and scalability.",
        "Troubleshot and debugged issues across different browsers and devices."
      ],
      technologies: ["Angular 5-8", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
      companyUrl: "#"
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <Card className="mt-8 overflow-hidden card-hover border-muted bg-card/50">
          <CardContent className="p-0">
            <Tabs defaultValue="exp1" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex flex-col md:flex-row">
                <TabsList className="h-auto md:h-auto md:flex-col justify-start p-0 md:w-64 md:border-r border-muted bg-muted/20">
                  {experiences.map((exp) => (
                    <TabsTrigger
                      key={exp.id}
                      value={exp.id}
                      className="py-4 px-6 text-left w-full rounded-none data-[state=active]:bg-primary/10 data-[state=active]:border-l-2 data-[state=active]:border-l-primary text-foreground justify-start"
                    >
                      <div>
                        <p className="font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.role}</p>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <div className="flex-1 p-0">
                  {experiences.map((exp) => (
                    <TabsContent key={exp.id} value={exp.id} className="p-6 m-0">
                      <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold flex items-center">
                            {exp.role}
                            {exp.companyUrl && (
                              <a 
                                href={exp.companyUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="ml-2 text-muted-foreground hover:text-primary transition-colors"
                              >
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </h3>
                          
                          <p className="text-lg text-primary flex items-center mt-1">
                            <Building2 size={16} className="mr-2" />
                            {exp.company}
                          </p>
                        </div>
                        
                        <p className="text-muted-foreground mt-2 sm:mt-0 flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </p>
                      </div>
                      
                      <ul className="space-y-2 mb-4 list-disc list-inside text-muted-foreground">
                        {exp.description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </div>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
