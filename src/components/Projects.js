import React from 'react';
import SectionTitle from '../SectionTitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'JUST DANCE! Embedded Systems Project',
      description: 'Developed an interactive, motion-based game using AVR microcontrollers programmed in C/C++. Established communication protocols for accelerometer using I2C, display using SPI, and remote control using Bluetooth USART.',
      repoLink: '#'
    },
    {
      title: 'F1Tenth Custom Docker Environment',
      description: 'Constructed a Docker environment to run remote operation drivers on a 1/10-scale vehicle. Contains lidar, motor controller, and remote control drivers.',
      repoLink: '#'
    },
    {
      title: 'Make Your Own Adventure, CLI Role-play-game',
      description: 'Managed Agile Development workflow for a final project, facilitating sprint planning, code reviews, and iterative improvements. Developed login page with connections to a SQLite3 database and created custom graph data structure to store current games in memory.',
      repoLink: '#'
    },
    {
      title: 'Autonomous Go-Kart Project',
      description: 'Designed and analyzed the electrical power system for an autonomous go-kart, performing load calculations, voltage regulation, and power distribution analysis to ensure system stability. Manually drafted circuit schematics and utilized PSpice for simulations.',
      repoLink: null
    },
    {
      title: 'First Robotics Competition (FRC) Lead Programmer',
      description: 'Developed autonomous navigation and control algorithms for Team 4276\'s robotics training program. Implemented PID control for a shooting mechanism, optimizing accuracy and response time with Victor SPX motor controllers.',
      repoLink: '#'
    }
  ];

  return (
    <section id="projects" className="mb-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <SectionTitle icon="code" title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;