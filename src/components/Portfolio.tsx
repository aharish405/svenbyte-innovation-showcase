import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Enterprise Dashboard Platform",
      category: "Web Application",
      description: "A comprehensive analytics dashboard for enterprise clients with real-time data visualization and advanced reporting capabilities.",
      image: project1,
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      link: "#",
      github: "#"
    },
    {
      title: "Cloud Infrastructure Migration",
      category: "Cloud Solutions",
      description: "Complete migration of legacy infrastructure to AWS cloud with 99.9% uptime and 40% cost reduction.",
      image: project2,
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      link: "#",
      github: "#"
    },
    {
      title: "Mobile Banking Application",
      category: "Mobile Development",
      description: "Secure and intuitive mobile banking app with biometric authentication and real-time transaction processing.",
      image: project3,
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore some of our recent projects that showcase our expertise in delivering innovative technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover border-0 shadow-soft group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <a
                    href={project.link}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-smooth"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={project.github}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-smooth"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-medium border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Have a Project in Mind?</h3>
            <p className="text-muted-foreground mb-6">
              We'd love to hear about your project and discuss how we can bring your vision to life.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-bounce shadow-medium"
            >
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;