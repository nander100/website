import React from 'react';
import { User, Briefcase, Code, BookOpen, GraduationCap, Cpu } from 'lucide-react';

const Navigation = ({ activeSection, onNavClick }) => {
  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'publications', label: 'Publications', icon: BookOpen },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Cpu }
  ];

  return (
    <nav className="sticky top-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center md:justify-start space-x-1 md:space-x-6 overflow-x-auto py-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavClick(item.id)}
                className={`px-3 py-2 rounded-md flex items-center text-sm font-medium ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon size={16} className="mr-1" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;