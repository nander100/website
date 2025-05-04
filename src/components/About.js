import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import SectionTitle from '../SectionTitle';

const About = () => {
  return (
    <section id="about" className="mb-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <SectionTitle icon="user" title="About Me" />
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <p className="text-gray-700 leading-relaxed">
              I'm an Electrical Engineer and Computer Scientist at UC Riverside with a specialization in Robotics Engineering. 
              As a proven leader, founder, and President of Highlander Combat Robotics and an undergraduate researcher, 
              I'm passionate about integrating software and hardware. My technical experiences and interests include 
              PID control and tuning, sensor calibration, and simulation.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-blue-900">Contact Information</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 text-blue-700" />
                  <a href="mailto:alex.totah278@gmail.com" className="text-blue-700 hover:underline">
                    alex.totah278@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Linkedin size={18} className="mr-2 text-blue-700" />
                  <a href="https://linkedin.com/in/alexander-totah" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    linkedin.com/in/alexander-totah
                  </a>
                </li>
                <li className="flex items-center">
                  <Github size={18} className="mr-2 text-blue-700" />
                  <a href="https://github.com/nander100" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    github.com/nander100
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-gray-200 w-48 h-48 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-sm">Profile Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;