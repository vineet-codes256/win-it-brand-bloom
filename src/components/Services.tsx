
import { Code, Gamepad, Palette, Monitor } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Gamepad className="h-10 w-10 text-studio-purple" />,
      title: "Game Development",
      description: "Full-cycle game development for PC, console, and mobile platforms, from concept to launch.",
    },
    {
      icon: <Palette className="h-10 w-10 text-studio-purple" />,
      title: "Art & Animation",
      description: "Stunning 2D and 3D art, character design, environments, and animations that bring games to life.",
    },
    {
      icon: <Code className="h-10 w-10 text-studio-purple" />,
      title: "Game Engineering",
      description: "Custom game engines, gameplay programming, optimization, and cross-platform technology solutions.",
    },
    {
      icon: <Monitor className="h-10 w-10 text-studio-purple" />,
      title: "QA & Testing",
      description: "Comprehensive quality assurance and testing to ensure flawless gameplay experiences across all platforms.",
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground">
            From concept to launch, we provide comprehensive game development solutions for studios and publishers worldwide.
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
