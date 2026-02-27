import { Heart, Code, Github, Linkedin } from 'lucide-react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-100 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left side - Name and tagline */}
          <div className="text-center md:text-left">
            <div className="font-bold text-xl text-red-500 mb-1">
              Gladis Tshishinga Kankwala
            </div>
            <p className="text-slate-400 text-sm">
              Tech Enthusiast'
            </p>
          </div>


          {/* Right side - Copyright */}
          <div className="text-sm text-slate-400">
            © {currentYear} Gladis Tshishinga Kankwala. All rights reserved.
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
           <div className="flex items-center space-x-3 justify-center">
            <Github className="h-6 w-6 text-red-500" />
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition">
              GitHub
            </a>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <Linkedin className="h-6 w-6 text-red-500" />
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
