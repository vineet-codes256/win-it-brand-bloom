
import { Award, Gamepad, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">WIN IT STUDIOS</span>
          </h2>
          <p className="text-muted-foreground">
            A passionate team of gaming enthusiasts taking our first steps into game development, driven by our love for games and fresh perspectives.
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
              To create innovative, engaging games that push boundaries and deliver exceptional player experiences across all platforms.
            </p>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-lg shadow-md p-8 hover-scale">
            <div className="w-12 h-12 bg-studio-purple/10 rounded-full flex items-center justify-center mb-4">
              <Gamepad className="h-6 w-6 text-studio-purple" />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Background</h3>
            <p className="text-muted-foreground">
              Though new to development, we're lifelong gamers who've spent thousands of hours playing and analyzing games. We understand what players want because we are players ourselves.
            </p>
          </div>

          {/* Team */}
          <div className="bg-white rounded-lg shadow-md p-8 hover-scale">
            <div className="w-12 h-12 bg-studio-purple/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-studio-purple" />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Team</h3>
            <p className="text-muted-foreground">
              Our passionate team brings fresh perspectives, technical skills, and a deep love for gaming as we embark on our journey to create games that captivate and inspire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
