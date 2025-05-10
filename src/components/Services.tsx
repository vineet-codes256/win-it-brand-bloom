
import { Code, Layout, Palette, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="h-10 w-10 text-studio-purple" />,
      title: "Brand Identity",
      description: "We craft unique and memorable brand identities that resonate with your audience and set you apart from competitors.",
    },
    {
      icon: <Layout className="h-10 w-10 text-studio-purple" />,
      title: "Web Design",
      description: "Beautiful, functional websites tailored to your goals, with seamless user experiences across all devices.",
    },
    {
      icon: <Code className="h-10 w-10 text-studio-purple" />,
      title: "Web Development",
      description: "Custom web applications and sites built with the latest technologies for optimal performance and scalability.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-studio-purple" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications designed to provide exceptional user experiences.",
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
            We offer a range of digital services to help your brand succeed in today's competitive landscape.
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
