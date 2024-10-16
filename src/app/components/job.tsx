import React from 'react';

interface ProjectProps {
  position: string;
  company: string;
  location: string;
  summary: string;
  responsibilities: string[];
}

const Job: React.FC<ProjectProps> = ({ position, company, location, summary, responsibilities }) => {
  return (
    <div className="job">
      <h3 className="text-lg mb-1">{position}</h3>
      <div className="flex flex-row">
        <h4 className="text-sm mb-4">{company}</h4>
        <h4 className="text-sm mb-4">{location}</h4>
      </div>
      <p className="text-sm mb-2 text-justify">{summary}</p>
      <div className="mb-3">
        <h4 className="text-sm mb-1">Responsibilities:</h4>
        <ul className="list-disc pl-5">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm mb-1 text-justify">{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Job };