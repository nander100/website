import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Alexander Totah. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:alex.totah278@gmail.com" className="text-blue-200 hover:text-white">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com/in/alexander-totah" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/nander100" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;