import React from 'react';

const SkillCategory = ({ category }) => {
  const { title, skills } = category;

  return (
    <div>
      <h3 className="text-lg font-semibold text-blue-900 border-b pb-2">{title}</h3>
      <ul className="mt-3 space-y-1 text-gray-700">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;