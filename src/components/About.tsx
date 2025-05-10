
import { Award, Briefcase, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">WIN IT STUDIOS</span>
          </h2>
          <p className="text-muted-foreground">
            We're a passionate team of designers, developers, and strategists on a mission to help brands succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Values */}
          <div className="bg-white rounded-lg shadow-md p-8 hover-scale">
            <div className="w-12 h-12 bg-studio-purple/10 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-studio-purple" />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-muted-foreground">
              To create innovative digital experiences that help our clients achieve their business goals and stand out from the crowd.
            </p>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-lg shadow-md p-8 hover-scale">
            <div className="w-12 h-12 bg-studio-purple/10 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-studio-purple" />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Experience</h3>
            <p className="text-muted-foreground">
              With over a decade of experience, we've helped countless brands transform their digital presence and achieve remarkable growth.
            </p>
          </div>

          {/* Team */}
          <div className="bg-white rounded-lg shadow-md p-8 hover-scale">
            <div className="w-12 h-12 bg-studio-purple/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-studio-purple" />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Team</h3>
            <p className="text-muted-foreground">
              Our diverse team brings together creativity, technical expertise, and strategic thinking to deliver exceptional results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
