import React from 'react';
import SectionTitle from './SectionTitle';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const experiences = [
    {
      title: 'Autonomous Vehicle Engineer',
      company: 'Collaborative Intelligence Systems Lab, UCR',
      period: 'January 2024 – Present',
      responsibilities: [
        'Simulated a fully autonomous scale model of a Formula One car using ROS deployed from Docker.',
        'Trained autonomous navigation models using TensorFlow on LiDAR and real-world data, enhancing object avoidance.',
        'Containerized environment with Docker to ease deployment on multiple systems.',
        'Designed and constructed a 1/10 scale model of a Formula One car to run autonomously to compete in an international competition.',
        'Conducting research on remote operation of AVs, exploring AI-driven network adaptation and real-time latency mitigation strategies.'
      ]
    },
    {
      title: 'Co-Founder and Club President',
      company: 'Highlander Combat Robotics, UCR',
      period: 'May 2023 – Present',
      responsibilities: [
        'Secured $5,000+ in sponsorships and funding, enabling expansion of robotics initiatives.',
        'Created and taught workshops teaching new members Solidworks, robot design, and Arduino skills increasing member retention by 50%.',
        'Directed an annual competition showcasing six student-created robots with 40+ spectators.',
        'Engineered and integrated a manual off-switch for fire risk reduction, manually fabricated custom wiring harnesses, and led safety team training.',
        'Led the creation of an engineering space in collaboration with five student organizations, enhancing access to essential tools and resources.'
      ]
    },
    {
      title: 'Systems and Control Engineer',
      company: 'Robotics and Medical Systems Lab, UCR',
      period: 'October 2022 – January 2024',
      responsibilities: [
        'Designed a PID control system using Matlab to control a steerable needle with < 1 ms latency.',
        'Engineered intuitive Arduino-based controls for the remote operation of an MRI-compatible biopsy robot, reducing user error.',
        'Calibrated MRI-compatible fiber optic proximity sensor using SIMULINK to accurately measure the bend of a steerable needle within <0.5mm.'
      ]
    },
    {
      title: 'Program Director and Lead Instructor',
      company: 'Kids That Code Inc., Riverside, CA',
      period: 'February 2024 - Present',
      responsibilities: [
        'Developed a robust robotics education program tailored for young learners, making complex concepts simple and accessible.',
        'Taught coding, robotics, and CAD to 1,000+ students per month, fostering a strong STEM foundation for elementary learners.'
      ]
    }
  ];

  return (
    <section id="experience" className="mb-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <SectionTitle icon="briefcase" title="Professional Experience" />
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;