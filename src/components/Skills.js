import React from 'react';
import SectionTitle from './SectionTitle';
import SkillCategory from './SkillCategory';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Areas of Expertise',
      skills: [
        'Robotics and Mechatronics',
        'Control Systems',
        'Hardware Design',
        'Sensor Integration'
      ]
    },
    {
      title: 'Electronic Testing/Monitoring',
      skills: [
        'Soldering',
        'Digital multimeter',
        'Function Generator',
        'Oscilloscope',
        'DC/AC Power Supply'
      ]
    },
    {
      title: 'Software Skills',
      skills: [
        'C/C++, Python, MATLAB',
        'PyTorch, SciPy, NumPy, Pandas',
        'TensorFlow, ROS',
        'Agile Development',
        'Nvidia Jetson Deployment'
      ]
    },
    {
      title: 'Applications',
      skills: [
        'Simulink, Pspice, Altium',
        'ROS, Ubuntu/Linux CLI',
        'Arduino, SolidWorks',
        'Docker, Overleaf/Latex',
        'MS Office'
      ]
    }
  ];

  return (
    <section id="skills" className="mb-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <SectionTitle icon="cpu" title="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;