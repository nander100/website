import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, repoLink } = project;

  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      {repoLink && (
        <a href={repoLink} className="text-blue-700 hover:underline mt-3 inline-block">
          Project Repo Link
        </a>
      )}
    </div>
  );
};

export default ProjectCard;