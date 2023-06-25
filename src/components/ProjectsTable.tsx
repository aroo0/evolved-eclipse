import React, { useState } from "react";
import projectsData from '../pages/projects-writings/data.json';

interface Project {
  id: number;
  title: string;
  publisher: string;
  type: string;
  date: string;
  url: string;
  lang: string;
}

export default function ProjectsTable() {
  const projects: Project[] = projectsData;
  const [selectedLanguage, setSelectedLanguage] = useState("ALL");

  // Filter projects based on the selected language
  const filteredProjects = projects.filter((project) => {
    if (selectedLanguage === "ALL") {
      return true; // Include all projects
    } else {
      return project.lang === selectedLanguage; // Include projects matching the selected language
    }
  });

  // Function to handle filter change
  const handleFilterChange = (lang: string) => {
    setSelectedLanguage(lang);
  };

  return (
    <>
      <div className='project-table' data-pagefind-ignore>
        <div className='table__lang'>
          <div className='headline headline-border'>Lang</div>
          <hr />
          <div className="lang-list">
            <span
              className={`project-cell-small lang-cell ${selectedLanguage === "ALL" ? "active" : ""}`}
              onClick={() => handleFilterChange("ALL")}
            >
              ALL
            </span>
            <span
              className={`project-cell-small lang-cell ${selectedLanguage === "pl" ? "active" : ""}`}
              onClick={() => handleFilterChange("pl")}
            >
              PL
            </span>
            <span
              className={`project-cell-small lang-cell ${selectedLanguage === "en" ? "active" : ""}`}
              onClick={() => handleFilterChange("en")}
            >
              EN
            </span>
          </div>
        </div>
        <div className='table-main'>
          <div className="row row-headline">
            <span className='headline projects-row-title headline-border'>Title</span>
            <span className='headline projects-row-publisher headline-border'>Publisher</span>
            <span className='headline projects-row-media headline-border'>Media</span>
            <span className='headline projects-row-date headline-border'>Date</span>
            <hr className="project-writings-hr" />
          </div>
          <ul className="table">
            {filteredProjects.map((project) => (
              <li className="row" key={project.id}>
                <span className='projects-row-title project-cell-title'>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </span>
                <span className='projects-row-publisher project-cell-small'>{project.publisher}</span>
                <span className='projects-row-media project-cell-small'>{project.type}</span>
                <span className='projects-row-date project-cell-small'>{project.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
