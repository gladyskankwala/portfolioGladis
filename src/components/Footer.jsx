import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left side - Name and tagline */}
          <div className="text-center md:text-left">
            <div className="font-bold text-xl text-red-500 mb-1">
              Gladis Tshishinga Kankwala
            </div>
            <p className="text-gray-700 text-sm">
              Web Developer , Cybersecurity Student <br/> AI/ML
            </p>
          </div>

          {/* Center - Built with love */}
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and</span>
            <Code className="h-4 w-4 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Right side - Copyright */}
          <div className="text-sm text-gray-700">
            © {currentYear} Gladis Tshishinga Kankwala. All rights reserved.
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-600">
            This portfolio showcases my journey as a junior developer. 
            I'm passionate about creating secure, accessible, and beautiful web experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
