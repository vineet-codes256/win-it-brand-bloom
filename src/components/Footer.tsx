
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-studio-dark-purple text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-display text-xl font-bold text-studio-purple">WIN IT</span>
              <span className="font-display text-xl font-bold text-white">STUDIOS</span>
            </div>
            <p className="text-studio-gray max-w-md">
              A creative digital studio helping brands stand out and succeed with innovative design, development, and strategic solutions.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-studio-gray hover:text-studio-purple transition-colors">About</a></li>
              <li><a href="#services" className="text-studio-gray hover:text-studio-purple transition-colors">Services</a></li>
              <li><a href="#work" className="text-studio-gray hover:text-studio-purple transition-colors">Work</a></li>
              <li><a href="#contact" className="text-studio-gray hover:text-studio-purple transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-studio-gray hover:text-studio-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-studio-gray hover:text-studio-purple transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-studio-gray hover:text-studio-purple transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-studio-gray text-sm">
            © {currentYear} WIN IT STUDIOS. All rights reserved.
          </p>
          <p className="text-studio-gray text-sm mt-2 md:mt-0">
            <a href="https://winitstudios.com" className="hover:text-studio-purple transition-colors">
              winitstudios.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
