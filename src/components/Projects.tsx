
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Lock } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  isgitHubUrlDisabled: boolean;
  isLiveUrlDisabled: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Minestar EDGE, Caterpiller Inc ",
      description: `As an Angular Developer for the Minestar Edge application at Caterpillar Inc., I contributed to a sophisticated, real-time platform that monitors KPI metrics for heavy machinery across mining and construction sites worldwide.
      "My primary responsibility enhancing performance, resolving critical bugs, and ensuring system stability. I integrated SonarQube metrics to monitor and improve code quality, addressing high and medium-priority issues to maintain the application's reliability. 
      Throughout my work, I focused on optimizing stability and responsiveness, ensuring seamless delivery of machine and operator data through APIs and WebSockets—critical for real-time decision-making in demanding industrial environments.`,
      image: "https://img.caixin.com/2019-04-26/1556263205937281.jpg",
      technologies: ["Angular 17", "TypeScript", "NgRx", "Chart.js", "Angular Material"],
      githubUrl: "#",
      isgitHubUrlDisabled: true,
      isLiveUrlDisabled: true,
      liveUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Franklintempletonindia.com, Franklin Templeton ",
      description: `As an Angular 17 Developer at Franklin Templeton, I played a pivotal role in building and maintaining the marketing and standalone accounts applications, delivering a modern, responsive user experience tailored to meet business needs.
      Collaborating closely with backend developers, I leveraged GraphQL queries to ensure efficient data management and seamless integration across services. I also integrated Bloomreach CMS, enabling dynamic content management and enhancing the platform's flexibility.
      My work included developing key application components, focusing on performance optimization and a user-centric design, ensuring a smooth and engaging experience for end users.`,
      image: "https://images.moneycontrol.com/static-mcnews/2020/04/franklin-templeton-770x433.jpg?impolicy=website&width=770&height=431",
      technologies: ["Angular 14", "Bloomreach CMS", "chart.js", "SCSS", "GraphQL"],
      githubUrl: "#",
      liveUrl: "https://www.franklintempletonindia.com/",
      isgitHubUrlDisabled: true,
      isLiveUrlDisabled: false,
      featured: true
    },
    {
      id: 3,
      title: "ADEP- Amdocs Data Engineering Platform, Amdocs",
      description: `As a Lead Developer for the Amdocs Data Engineering Platform (ADEP)—deployed at industry leaders like AT&T, T-Mobile, and Vodafone—I played a foundational role in its development from the ground up. I designed and implemented core application architecture and routing, leveraging PrimeNG components to deliver a robust, high-performance platform. My work spanned the full stack, integrating Angular, Python FastAPI, and PostgreSQL to create a seamless and scalable solution.
      I was responsible for developing key platform features, including metadata visualization, user, role, resource, and issue management, and a personal user dashboard. I also implemented idle timeout functionality, comprehensive error handling using interceptors, and user activity logging. Additionally, I built CRUD operations and metadata import/export capabilities, enhancing the platform's functionality, security, and usability.
      Through my contributions, I helped deliver a secure, feature-rich platform that empowers clients to manage complex data workflows efficiently while maintaining system integrity and operational excellence.`,
      image: "https://w.media/wp-content/uploads/2LM-IC-CTech.jpg",
      technologies: ["Angular", "TypeScript", "Postgre SQL", "chart.js", "PrimeNG", 'FastAPI'],
      githubUrl: "#",
      isgitHubUrlDisabled: true,
      isLiveUrlDisabled: true,
      featured: true
    },
    {
      id: 4,
      title: "ARMS- Accounts Receivable Management System, AT&T",
      description: `As the Lead Developer for AT&T’s Accounts Receivable Management System (ARMS), I spearheaded the complete rebuild of the application, utilizing Angular for the frontend, a Java backend, and an SQL database, all seamlessly deployed on Azure for internal users.
      I architected and implemented a robust Role-Based Access Control (RBAC) system, ensuring granular permissions and secure access across the platform. Tailoring the application’s design and deployment to meet AT&T’s unique requirements, I established secure authentication and authorization protocols, reinforced by route guards to protect sensitive data and workflows.
      To enhance performance and usability, I integrated AgGrid Angular, enabling efficient CRUD operations and delivering a streamlined, responsive user experience. My efforts resulted in a scalable, secure, and highly efficient system, empowering AT&T to manage accounts receivable with precision and ease.`,
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvM4LwCd9Cuv579QiqJQ0FxMHCyWnSqBU1OsV1QaL6YpttGTmR_6uUE2GzkdkaQcWT4masqki11RMAZGlQyZ39O_jFZCi8X8socCHXZrtQzhPxRdRb56VWW-rTspmxZIWOdEKWJZYQ29BLS9thwdsn8S5UiCSEzcvyp-aQAw5olHXEeoyhDu05VfRbrdfV/s728-rw-e365/att.png",
      technologies: ["Angular 13", "SQL", "Java", "AGGrid", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
      isgitHubUrlDisabled: true,
      isLiveUrlDisabled: true,
      featured: true
    },
    {
      id: 5,
      title: "SNOC Change Management System, Voddafone Idea",
      description: `As the Lead Developer for AT&T’s Accounts Receivable Management System (ARMS), I spearheaded the complete rebuild of the application, utilizing Angular for the frontend, a Java backend, and an SQL database, all seamlessly deployed on Azure for internal users.
      I architected and implemented a robust Role-Based Access Control (RBAC) system, ensuring granular permissions and secure access across the platform. Tailoring the application’s design and deployment to meet AT&T’s unique requirements, I established secure authentication and authorization protocols, reinforced by route guards to protect sensitive data and workflows.
      To enhance performance and usability, I integrated AgGrid Angular, enabling efficient CRUD operations and delivering a streamlined, responsive user experience. My efforts resulted in a scalable, secure, and highly efficient system, empowering AT&T to manage accounts receivable with precision and ease.`,
      image: "https://avispl.ca/wp-content/uploads/2020/07/Invenergy-EB9C6459-2000px.jpg",
      technologies: ["Angular 8", "SQL", "Java", "Angular Material"],
      githubUrl: "#",
      liveUrl: "#",
      isgitHubUrlDisabled: true,
      isLiveUrlDisabled: true,
      featured: false
    },
    {
      id: 5,
      title: "NARAD- Network Analytics, Reporting, and Data., Voddafone Idea",
      description: `Developed and implemented custom scripts using MML (Man-Machine Language) to communicate with NSN BSCs for automating report generation and data extraction.
      Enabled advanced trends, dashboards, and customized data filters, significantly improving operational efficiency and decision-making for network planning and optimization teams.`,
      image: "https://www.gl.com/images/Newsletter/cellular-network-monitoring-solution.jpg",
      technologies: ["php", "JavaScript", "HTML5", "CSS3", "Bootstrap", "mml"],
      githubUrl: "#",
      liveUrl: "#",
      isgitHubUrlDisabled: true,
      isLiveUrlDisabled: true,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="bg-secondary/20 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="space-y-16">
          {/* Featured Projects */}
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      project.isgitHubUrlDisabled ? (
                        <div className="flex items-center text-muted-foreground">
                          <Lock size={16} className="mr-2" /> Private Repository
                        </div>
                      ) : (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Github size={16} className="mr-2" /> Code
                          </a>
                        </Button>
                      )
                    )}
                    
                    {project.liveUrl && (
                      project.isLiveUrlDisabled ? (
                        <div className="flex items-center text-muted-foreground ml-4">
                          <Lock size={16} className="mr-2" /> Internal Demo
                        </div>
                      ) : (
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <ExternalLink size={16} className="mr-2" /> Live Demo
                          </a>
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Other Noteworthy Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map(project => (
                <Card key={project.id} className="overflow-hidden card-hover bg-card/80">
                  <CardHeader className="pb-2">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="outline">{tech}</Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-2">
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        project.isgitHubUrlDisabled ? (
                          <span className="text-muted-foreground">
                            <Lock size={20} />
                          </span>
                        ) : (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github size={20} />
                          </a>
                        )
                      )}
                      
                      {project.liveUrl && (
                        project.isLiveUrlDisabled ? (
                          <span className="text-muted-foreground">
                            <Lock size={20} />
                          </span>
                        ) : (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
