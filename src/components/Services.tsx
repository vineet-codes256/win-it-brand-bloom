
import { Code, Gamepad, Palette, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Gamepad className="h-10 w-10 text-studio-purple" />,
      title: "Game Development",
      description: "Creating innovative gameplay experiences with modern game engines and cutting-edge technology.",
    },
    {
      icon: <Palette className="h-10 w-10 text-studio-purple" />,
      title: "Art & Animation",
      description: "Crafting unique visual styles and engaging character designs that stand out in today's crowded market.",
    },
    {
      icon: <Code className="h-10 w-10 text-studio-purple" />,
      title: "Technical Innovation",
      description: "Pushing boundaries with creative coding solutions and performance optimization for immersive experiences.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-studio-purple" />,
      title: "Launch Strategy",
      description: "Building community engagement and strategic marketing approaches to successfully launch indie titles.",
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground">
            Though we're a new studio, our team brings passion and fresh perspectives to these core areas of game development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-studio-purple transition-colors">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
