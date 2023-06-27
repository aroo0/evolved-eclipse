import React, { useState } from "react";
import projectsData from '../pages/projects-writings/data.json';
import ArowIcon from './ArowIcon'
import Styles from './styles.module.css'; // Use CSS Modules (must end in `.module.css`, `.module.scss`, or `.module.sass`!)


interface Project {
  id: number;
  title: string;
  publisher: string;
  type: string;
  date: string;
  url: string;
  lang: string;
}

type Language = "ALL" | "pl" | "en";


export default function ProjectsTable() {
  const projects: Project[] = projectsData;
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("ALL");
  const [sortingOrder, setSortingOrder] = useState<{ column: string; order: "asc" | "desc" }>({
    column: "date",
    order: "desc",
  });

  // Filter projects based on the selected language
  const filteredProjects = projects.filter((project) => {
    if (selectedLanguage === "ALL") {
      return true; // Include all projects
    } else {
      return project.lang === selectedLanguage; // Include projects matching the selected language
    }
  });

  // Sort projects based on the selected sorting order and criteria
  const sortedProjects = filteredProjects.sort((a, b) => {
    const column = sortingOrder.column;
    const order = sortingOrder.order;

    if (column === "title") {
      return order === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    } else if (column === "publisher") {
      return order === "asc" ? a.publisher.localeCompare(b.publisher) : b.publisher.localeCompare(a.publisher);
    } else if (column === "media") {
      return order === "asc" ? a.type.localeCompare(b.type) : b.type.localeCompare(a.type);
    } else if (column === "date") {
      return order === "asc" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
    }

    return 0;
  });

  // Function to handle filter change
  const handleFilterChange = (lang: string) => {
    setSelectedLanguage(lang);
  };

  // Function to handle sorting change
  const handleSortingChange = (column: string) => {
    setSortingOrder((prevSortingOrder) => {
      if (prevSortingOrder.column === column) {
        // If the same column is clicked, toggle the sorting order
        const newOrder = prevSortingOrder.order === "asc" ? "desc" : "asc";
        return { column, order: newOrder };
      } else {
        // If a different column is clicked, set the new column and default to ascending order
        return { column, order: "asc" };
      }
    });
  };

  return (
    <>
      <div className='project-table' data-pagefind-ignore>
        <div className='table__lang'>
          <div className='headline headline'>Lang</div>
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
            <div
              className='headline projects-row-title headline-border'
              onClick={() => handleSortingChange("title")}
            >
              Title
              <ArowIcon />
            </div>
            <div
              className='headline projects-row-publisher headline-border'
              onClick={() => handleSortingChange("publisher")}
            >
              Publisher
              <ArowIcon />
            </div>
            <div
              className='headline projects-row-media headline-border'
              onClick={() => handleSortingChange("media")}
            >
              Media
              <ArowIcon />
            </div>
            <div
              className='headline projects-row-date headline-border'
              onClick={() => handleSortingChange("date")}
            >
              Date
              <ArowIcon />
            </div>
            <hr className="project-writings-hr" />
          </div>
          <ul className="table">
            {sortedProjects.map((project) => (
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
