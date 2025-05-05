import React from 'react';
import { User, Briefcase, Code, BookOpen, GraduationCap, Cpu } from 'lucide-react';

const SectionTitle = ({ icon, title }) => {
  const icons = {
    user: User,
    briefcase: Briefcase,
    code: Code,
    bookOpen: BookOpen,
    graduationCap: GraduationCap,
    cpu: Cpu
  };

  const IconComponent = icons[icon];

  return (
    <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
      {IconComponent && <IconComponent size={24} className="mr-2" />}
      {title}
    </h2>
  );
};

export default SectionTitle;