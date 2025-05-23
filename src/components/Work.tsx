
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const Work = () => {
  const projects = [
    {
      title: "Galactic Conquest",
      category: "Concept - Mobile Strategy Game",
      image: "bg-gradient-to-br from-blue-500 to-purple-500"
    },
    {
      title: "Shadow Warriors",
      category: "In Development - Action RPG",
      image: "bg-gradient-to-br from-green-500 to-teal-500"
    },
    {
      title: "Speed Racers Ultimate",
      category: "Concept - Racing Simulator",
      image: "bg-gradient-to-br from-amber-500 to-orange-500"
    }
  ];

  return (
    <section id="work" className="py-20 bg-studio-dark-purple text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Vision</span>
          </h2>
          <p className="text-studio-gray">
            While we're just starting out, these are the innovative game concepts we're passionate about bringing to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection direction="right" key={index}>
              <div className="overflow-hidden rounded-lg group cursor-pointer hover-scale">
                <div className={`aspect-video ${project.image} flex items-end p-6`}>
                  <div>
                    <span className="text-xs uppercase tracking-wider bg-white/20 px-2 py-1 rounded-full max-[390px]:text-xxs">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="bg-studio-purple border-transparent text-white hover:bg-white hover:text-studio-dark-purple hover:border-white animate-fade-in">
            Learn More About Our Vision
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Work;
