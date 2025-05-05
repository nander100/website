import React from 'react';

const ExperienceItem = ({ experience }) => {
  const { title, company, period, responsibilities } = experience;

  return (
    <div className="border-l-4 border-blue-900 pl-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-blue-700">{company}</p>
        </div>
        <p className="text-gray-600 mt-1 md:mt-0">{period}</p>
      </div>
      <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;