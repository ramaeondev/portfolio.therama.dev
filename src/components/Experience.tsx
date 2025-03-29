
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
      role: "Technical Lead",
      company: "HCLTech",
      period: "Oct 2021 - Present",
      description: [
        "As an Angular Developer at HCLTech, I have worked on diverse, high-impact projects across industries, delivering scalable and efficient web applications for major clients like Caterpillar Inc., Franklin Templeton, Amdocs, and AT&T.", 
        "With a focus on front-end development, I have led and contributed to key initiatives, including upgrading frameworks, optimizing performance, and integrating advanced technologies.",
        "Caterpillar Inc. (Minestar EDGE): Upgraded Angular framework, resolved performance issues, and improved code quality by integrating SonarQube and migrating pipelines to GitHub Actions.",
        "Franklin Templeton: Built and maintained modern Angular 17 applications with a focus on dynamic content using Bloomreach CMS and optimized data handling via GraphQL.",
        "Amdocs (ADEP Platform): Led the design and development of core features for a Data Engineering Platform, including advanced user management, metadata visualization, and error handling."
      ],
      technologies: ["Angular 14-19", "TypeScript", "NgRx", "RxJS", "Jasmine", "Karma", "RESTful APIs", "PostgreSQL", "Websockets"],
      companyUrl: "https://www.hcltech.com/"
    },
    {
      id: "exp2",
      role: "Senior Engineer",
      company: "Tata Communications",
      period: "Dec 2019 - Sept 2021",
      description: [
        "Developed and maintained the frontend interface, delivering an intuitive and responsive user experience.",
        "Built reusable components and integrated the application with backend APIs for real-time tracking of change requests.",
        "Implemented role-based access controls (RBAC) to enforce secure access and approval workflows.",
        "Optimized performance and ensured code quality through testing and continuous improvements."
      ],
      technologies: ["Angular 6-8", "TypeScript", "Angular Material", "SCSS", "RESTful APIs"],
      companyUrl: "https://www.tatacommunications-ts.com/"
    },
    {
      id: "exp3",
      role: "Senior Executive - Operations",
      company: "Vodafone Idea Limited",
      period: "Sep 2015 - Dec 2019",
      description: [
        "As a Senior Executive in the Planning and Quality Department at Vodafone Idea, I was responsible for managing and enhancing circle-level KPI dashboards, driving continuous improvements month-over-month (MoM) and quarter-over-quarter (QoQ).",
        "My role focused on optimizing network performance metrics and delivering actionable insights to support strategic planning and operational efficiency.",
        "NARAD Application Development: Played a key role in developing NARAD (Network Analytics, Reporting, and Data Application)—a national award-winning platform for monitoring 2G network performance.",
        "Automated report generation and data extraction by creating custom scripts using MML (Man-Machine Language) to interface with NSN BSCs, improving data accuracy and operational efficiency."
      ],
      technologies: ["php", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
      companyUrl: "https://www.myvi.in/"
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
