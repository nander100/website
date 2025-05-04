import React from 'react';
import SectionTitle from '../SectionTitle';

const Education = () => {
  return (
    <section id="education" className="mb-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <SectionTitle icon="graduationCap" title="Education" />
        <div className="p-4 border-l-4 border-blue-900">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h3 className="text-xl font-semibold">UC Riverside (UCR)</h3>
              <p className="text-blue-700">BS in Electrical Engineering and Computer Science</p>
            </div>
            <p className="text-gray-600 mt-1 md:mt-0">September 2022 – May 2026</p>
          </div>
          <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700">
            <li>B.S. in Electrical Engineering: 3.50/4.00</li>
            <li>Minor in Computer Science: 3.45/4.00</li>
            <li>4x Dean's Honor List Recipient, IEEE, ASME, Highlander Combat Robotics</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;