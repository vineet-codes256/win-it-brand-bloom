
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Gamepad } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <Gamepad className="h-6 w-6 text-studio-purple" />
            <span className="font-display text-xl font-bold text-studio-purple">WIN IT</span>
            <span className="font-display text-xl font-bold">STUDIOS</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-studio-purple transition-colors">
            About
          </a>
          <a href="#services" className="text-sm font-medium hover:text-studio-purple transition-colors">
            Services
          </a>
          <a href="#work" className="text-sm font-medium hover:text-studio-purple transition-colors">
            Games
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-studio-purple transition-colors">
            Contact
          </a>
          <Button className="bg-studio-purple hover:bg-studio-purple/90">Play Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b animate-slide-in-right">
          <div className="container py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#work" 
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Games
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-studio-purple hover:bg-studio-purple/90 w-full">
              Play Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
