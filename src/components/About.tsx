import { Card, CardContent } from "@/components/ui/card";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Svenbyte Innovations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to delivering innovative solutions that transform businesses and drive digital excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="card-hover border-0 shadow-soft">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">M</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth in the digital age.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-0 shadow-soft">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">V</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the leading technology partner for businesses worldwide, recognized for our innovative solutions and exceptional client relationships.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-0 shadow-soft">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">V</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Values</h3>
              <p className="text-muted-foreground">
                Innovation, integrity, collaboration, and excellence guide everything we do. We believe in building lasting partnerships through trust and results.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-8">Meet Our Team</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="card-hover border-0 shadow-soft">
            <CardContent className="p-8 text-center">
              <img
                src={team1}
                alt="Harish Annadevara - CEO & Founder"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-medium"
              />
              <h4 className="text-xl font-semibold mb-2 text-foreground">Harish Annadevara</h4>
              <p className="text-primary font-medium mb-2">Founder & Director</p>
              <p className="text-muted-foreground">
                With extensive experience in technology leadership, Harish drives our vision of innovative solutions that transform businesses.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-0 shadow-soft">
            <CardContent className="p-8 text-center">
              <img
                src={team2}
                alt="Koti Pemma - CTO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-medium"
              />
              <h4 className="text-xl font-semibold mb-2 text-foreground">Koti Pemma</h4>
                          <p className="text-primary font-medium mb-2">Technical Head</p>
              <p className="text-muted-foreground">
                Koti leads our technical strategy with expertise in cloud architecture, AI, and enterprise software development.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-0 shadow-soft">
            <CardContent className="p-8 text-center">
              <img
                src={team3}
                alt="Narasimha V - Lead Developer"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-medium"
              />
              <h4 className="text-xl font-semibold mb-2 text-foreground">Narasimha V</h4>
              <p className="text-primary font-medium mb-2">Technical Head</p>
              <p className="text-muted-foreground">
                Narasimha brings deep technical expertise in software development and innovative solution architecture.
              </p>
            </CardContent>
                  </Card>

        </div>
      </div>
    </section>
  );
};

export default About;