import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  const academicProjects = [
    {
      title: "SongBird",
      description: "Music recommendation platform aggregating data from multiple streaming services with content-based recommendation engine.",
      technologies: ["React", "Django", "REST APIs", "PostgreSQL", "AWS"],
      github: "https://github.com/marnunrey2/TFG-Songbird",
      featured: true,
      details: [
        "Designed and developed the entire frontend with React: charts, search, lyrics, artist data, and user dashboards.",
        "Built backend services in Django to collect, store, and unify data from Spotify, Apple Music, Billboard, Deezer, Last.fm, YouTube, and Amazon Music APIs, using web scraping and APIs.",
        "Implemented user authentication and a 'Like' system tied to recommendations.",
        "Developed a content-based recommendation algorithm using track metadata.",
        "Structured a PostgreSQL database able to store thousands of songs, charts, and artist profiles."
      ]
    },
    {
      title: "Gender ID via Handwriting",
      description: "AI model predicting writer gender from handwriting samples. Achieved ~70% accuracy using image processing and ML.",
      technologies: ["Python", "OpenCV", "scikit-learn", "Image Processing", "Artificial Intelligence", "Machine Learning"],
      github: "https://github.com/marnunrey2/Gender-ID-via-Handwriting",
      details: [
        "Preprocessed handwritten image samples using OpenCV to extract character features.",
        "Designed and implemented feature extraction pipelines.",
        "Trained and evaluated ML models (scikit-learn), reaching ~70% prediction accuracy.",
        "Visualized results and documented model performance.",
        "Contributed to dataset preparation from raw handwritten pages."
      ]
    },
    {
      title: "NexONG",
      description: "Web Educational Management Platform for an NGO. Built with 20-person team using Scrum methodology.",
      technologies: ["React", "Django", "REST API", "PostgreSQL", "Scrum"],
      github: "https://github.com/ISPP-G5",
      details: [
        "Developed core React pages for students, educators, volunteers, partners, and admin users.",
        "Helped shape the structure of user roles and permissions.",
        "Built UI components for calendars, student records, grades, and event management.",
        "Integrated frontend with backend APIs and contributed to REST endpoint design.",
        "Actively participated in Scrum workflows: sprint planning, reviews, testing, and backlog refinement."
      ]
    },
    {
      title: "Decide Voting Platform",
      description: "A full election management and secure voting system.",
      technologies: ["React", "Django", "REST API", "PostgreSQL", "Authentication"],
      github: "https://github.com/marnunrey2/Decide-Voting-Platform",
      details: [
        "Built key backend models and API endpoints using Django REST Framework.",
        "Integrated PostgreSQL database for voter and election management.",
        "Developed React components for registration, login, voting forms, and admin dashboards.",
        "Implemented admin features: create/edit elections, manage questions, control opening/closing processes.",
        "Ensured end-to-end flow from user login to vote submission."
      ]
    },
    {
      title: "DeliverUS",
      description: "Food ordering platform with product catalog, user orders, profiles and admin interface.",
      technologies: ["React", "Express.js", "Node.js", "MariaDB"],
      github: "https://github.com/IISSI2-IS/frontend-deliverables-l-ingles-3",
      details: [
        "Developed key UI components using React for product listings, order history, and user profiles.",
        "Integrated the frontend with a Node/Express REST API.",
        "Implemented user authentication and authorization workflows.",
        "Built admin features such as product management and order dashboard."
      ]
    },
    {
      title: "Python for Analytics Project",
      description: "A data analytics final project completed in the USA.",
      technologies: ["Python", "Pandas", "GeoPandas", "Matplotlib", "Folium", "Data Analysis"],
      github: "https://github.com/marnunrey2/Python-for-analytics",
      details: [
        "Collected, cleaned, and transformed US Census datasets related to Spanish-speaking populations.",
        "Used Python (Pandas, GeoPandas, Matplotlib, Folium) to generate visual geographic analyses by state, county, and city.",
        "Automated the notebook workflow to ensure reproducible data analysis.",
        "Created clear visual maps to communicate demographic patterns."
      ]
    },
    {
      title: "Cosmetics E-Commerce Platform",
      description: "E-commerce website with appointments and Stripe payments.",
      technologies: ["React", "Stripe", "REST API", "E-commerce"],
      github: "https://github.com/marnunrey2/Cosmetics-E-Commerce-Platform",
      details: [
        "Built frontend pages for product display, shopping cart, checkout, and appointment booking using React.",
        "Integrated Stripe payment gateway for secure online transactions.",
        "Developed user profile pages and appointment management views.",
        "Collaborated on backend endpoints to support orders, payments, and admin management.",
        "Ensured responsive UI and polished user experience."
      ]
    },
    {
      title: "Tarot Web App",
      description: "API-based tarot card generator. Features daily draws, spreads and interactive games.",
      technologies: ["Python", "Java", "HTML", "REST API"],
      github: "https://github.com/marnunrey2/Tarot",
      details: [
        "Designed and implemented a REST API in Python to simulate tarot card draws (daily, general, and card-specific queries).",
        "Developed logic for multiple card layouts and user interactions.",
        "Collaborated in testing and iterating on the game mechanics through user feedback."
      ]
    }
  ];

  const professionalProjects = [
    {
      title: "Expression of Interest Generator",
      description: "Internal automation tool for generating Expressions of Interest (EOIs) with Gemini and AI Integration.",
      technologies: ["React", "Python", "REST API", "FastAPI", "Gemini AI", "Process Automation"],
      company: "Eptisa TI",
      details: [
        "Developed backend to obtain procurement notices automatically and stored along with company's useful data to complete the EOI.",
        "Built frontend UI workflows to allow users to create, edit, and manage EOIs easily.",
        "Improved the efficiency of internal processes by reducing manual work."
      ]
    },
    {
      title: "Asphalt Management Platform",
      description: "Platform to manage roadworks, asphalt maintenance, and geolocated project data with data modeling and GIS Visualization.",
      technologies: ["React", "Python", "REST API", "FastAPI", "Math Algorithms", "GIS Visualization"],
      company: "Eptisa TI",
      details: [
        "Developed backend to predict asphalt maintenance.",
        "Integrated data from backend services into an organized, user-friendly interface.",
        "Worked on UI components and dashboards for project visualization and data display.",
        "Participated in designing GIS-related sections showing geospatial project data."
      ]
    }, 
    {
      title: "Redexis Control Center Viewer",
      description: "Web GIS application for monitoring infrastructure networks of Redexis.",
      technologies: ["GIS", "ArcGIS Pro", "ArcGIS Experience Builder", "JavaScript", "WebMaps", "FeatureLayers", "Utility Networks"],
      company: "Eptisa TI",
      details: [
        "Developed frontend UI and map components using GIS libraries and geospatial APIs.",
        "Implemented layer visualization, map interactions, and user workflows.",
        "Worked as a GIS programmer, integrating geospatial data with ArcGIS in GIS services and webmaps.",
        "Collaborated with ESRI teams to ensure data consistency and performance."
      ]
    }, 
    {
      title: "Correos Search Tool (Mindbreeze)",
      description: "Indexing and search tool for products, using Mindbreeze to improve search relevance.",
      technologies: ["Mindbreeze", "Indexing", "Search Optimization"],
      company: "Eptisa TI",
      details: [
        "Worked with Mindbreeze InSpire (enterprise search) to configure connectors and indexing pipelines that ingested data from multiple sources (databases, file shares, web services).",
        "Implemented and tested custom extraction rules and metadata mapping to improve searchability and document classification.",
        "Integrated the Mindbreeze search UI/APIs with the frontend, building search components, result lists, filters and advanced query interfaces.",
        "Tuned relevance and ranking rules, synonyms and stop-words to improve search precision and recall for end users.",
        "Built monitoring and validation workflows to ensure index freshness and diagnose indexing errors.",
        "Collaborated with stakeholders to define search requirements and validated outcomes through user testing and analytics."
      ]
    }
  ];

  const ProjectCard = ({ project, isAcademic = true }: { project: any, isAcademic?: boolean }) => (
    <Card 
      className="card-glow border-border/50 hover:border-primary/50 transition-all duration-300 h-full cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl mb-2 flex items-center gap-2">
            {project.title}
            {project.featured && (
              <Badge className="hero-gradient text-primary-foreground">Featured</Badge>
            )}
          </CardTitle>
          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
            {project.github && (
              <Button variant="ghost" size="sm" className="p-2" onClick={() => window.open(project.github, '_blank')}>
                <Github className="w-4 h-4" />
              </Button>
            )}
            {project.demo && (
              <Button variant="ghost" size="sm" className="p-2">
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
        {!isAcademic && project.company && (
          <Badge variant="secondary" className="w-fit">{project.company}</Badge>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of academic and professional work spanning web development, 
            data science, GIS applications, and innovative digital solutions.
          </p>
        </div>

        <Tabs defaultValue="academic" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="academic">Academic Projects</TabsTrigger>
            <TabsTrigger value="professional">Professional Work</TabsTrigger>
          </TabsList>
          
          <TabsContent value="academic">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicProjects.map((project, index) => (
                <div 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="professional">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalProjects.map((project, index) => (
                <div 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} isAcademic={false} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-3">
                {selectedProject?.title}
                {selectedProject?.featured && (
                  <Badge className="hero-gradient text-primary-foreground">Featured</Badge>
                )}
              </DialogTitle>
              {selectedProject?.company && (
                <Badge variant="secondary" className="w-fit">{selectedProject.company}</Badge>
              )}
              <DialogDescription className="text-base pt-4">
                {selectedProject?.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 pt-4">
              {selectedProject?.details && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Contributions</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.map((detail: string, index: number) => (
                      <li key={index} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.technologies.map((tech: string, index: number) => (
                    <Badge key={index} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {selectedProject?.github && (
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="default" 
                    className="gap-2"
                    onClick={() => window.open(selectedProject.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </Button>
                  {selectedProject.demo && (
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={() => window.open(selectedProject.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;