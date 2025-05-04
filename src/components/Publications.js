import React from 'react';
import SectionTitle from '../SectionTitle';
import PublicationItem from './PublicationItem';

const Publications = () => {
  const publications = [
    {
      title: 'An MRI-conditional flexible endoscopic robot with a hydraulic tendon-driven actuation system',
      journal: 'Journal of Medical Robotics Research',
      link: 'https://doi.org/10.1142/S2424905X24400038',
      status: 'Published'
    },
    {
      title: 'Remote Teleoperation System for Autonomous Vehicles: Enhancing Human Intervention in Critical Scenarios',
      journal: '',
      link: null,
      status: 'Under Development, Targeting Summer 2025'
    },
    {
      title: 'Imitation learning for autonomous driving systems',
      journal: '',
      link: null,
      status: 'Under Development, Targeting Summer 2025'
    }
  ];

  return (
    <section id="publications" className="mb-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <SectionTitle icon="bookOpen" title="Publications" />
        <div className="space-y-6">
          {publications.map((publication, index) => (
            <PublicationItem key={index} publication={publication} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;