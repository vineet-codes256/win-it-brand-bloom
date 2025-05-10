
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Turn Your Vision Into <span className="text-gradient">Digital Reality</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              We are a creative studio dedicated to helping brands win in the digital landscape with 
              cutting-edge design and development solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-studio-purple hover:bg-studio-purple/90 px-8 py-6 text-base">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-base">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -z-10 w-3/4 h-3/4 bg-studio-light-purple/30 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border">
              <div className="aspect-video bg-gradient-to-br from-studio-purple to-studio-light-purple p-1">
                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-2xl font-bold text-studio-purple">WIN IT STUDIOS</h3>
                    <p className="text-muted-foreground mt-2">Creative Digital Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
