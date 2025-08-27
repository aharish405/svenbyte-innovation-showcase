import { Card, CardContent } from "@/components/ui/card";
import { Code, Cloud, Users, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies. From web applications to enterprise systems, we deliver scalable and maintainable code.",
      features: ["Custom Web Applications", "Mobile App Development", "API Development & Integration", "Legacy System Modernization"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Comprehensive cloud services to accelerate your digital transformation. We help you leverage the power of cloud computing for enhanced scalability.",
      features: ["Cloud Migration", "DevOps & CI/CD", "Infrastructure as Code", "Cloud Security & Compliance"]
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology consulting to align IT with your business goals. Our experts provide guidance on technology decisions and digital strategy.",
      features: ["Technology Strategy", "System Architecture Design", "Performance Optimization", "Security Assessments"]
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business processes and enhance operational efficiency.",
      features: ["Process Automation", "Digital Workflow Design", "Data Analytics & BI", "Change Management"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive technology solutions designed to drive your business forward and achieve your digital transformation goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-soft group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce shadow-soft">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-subtle p-8 rounded-2xl shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our services can help transform your business and drive growth.
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
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;