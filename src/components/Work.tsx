
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Work = () => {
  const projects = [
    {
      title: "TechCorp Rebrand",
      category: "Brand Identity",
      image: "bg-gradient-to-br from-blue-500 to-purple-500"
    },
    {
      title: "FitLife Mobile App",
      category: "Mobile Development",
      image: "bg-gradient-to-br from-green-500 to-teal-500"
    },
    {
      title: "EcoStore E-Commerce",
      category: "Web Development",
      image: "bg-gradient-to-br from-amber-500 to-orange-500"
    }
  ];

  return (
    <section id="work" className="py-20 bg-studio-dark-purple text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-studio-gray">
            Explore our latest projects and see how we've helped our clients achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="overflow-hidden rounded-lg group cursor-pointer hover-scale">
              <div className={`aspect-video ${project.image} flex items-end p-6`}>
                <div>
                  <span className="text-xs uppercase tracking-wider bg-white/20 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-studio-dark-purple">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Work;
