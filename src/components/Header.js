import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl font-bold">Alexander Totah</h1>
          <p className="text-blue-200 mt-1">Electrical Engineer & Computer Scientist</p>
        </div>
        <div className="flex space-x-4">
          <a href="mailto:alex.totah278@gmail.com" className="flex items-center text-blue-200 hover:text-white">
            <Mail size={18} className="mr-1" />
            <span className="hidden md:inline">Email</span>
          </a>
          <a href="https://linkedin.com/in/alexander-totah" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-200 hover:text-white">
            <Linkedin size={18} className="mr-1" />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
          <a href="https://github.com/nander100" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-200 hover:text-white">
            <Github size={18} className="mr-1" />
            <span className="hidden md:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;