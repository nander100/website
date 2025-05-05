import React from 'react';

const PublicationItem = ({ publication }) => {
  const { title, journal, link, status } = publication;

  return (
    <div className="p-4 border-l-4 border-blue-900 bg-blue-50">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 italic">
        {journal ? journal : status}
      </p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline mt-2 inline-block">
          {link}
        </a>
      )}
    </div>
  );
};

export default PublicationItem;