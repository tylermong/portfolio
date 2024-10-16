import React from 'react';

interface ProjectProps {
  title: string;
  link: string;
  role: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({ title, link, role, description }) => {
  return (
    <div className="project">
      <h3 className="text-lg mb-3">
        <a href={link} target="_blank" rel="noopener noreferrer" className="underline">
          {title}
        </a>
      </h3>
      <h4 className="mb-3">{role}</h4>
      <p className="mb-3 text-justify">{description}</p>
    </div>
  );
};

const ViewAllProjects: React.FC = () => {
  return (
    <div className="view-all-projects text-lg mb-3 flex flex-row">
      <a href="https://github.com/tylermong" target="_blank" rel="noopener noreferrer" className="underline">
        View All Projects
      </a>
      <p>&nbsp;→</p>
    </div>
  );
};

export { Project, ViewAllProjects };