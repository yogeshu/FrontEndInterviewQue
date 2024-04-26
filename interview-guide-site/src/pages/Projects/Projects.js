import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Projects.module.css'; // Assuming CSS module for styling
import { projectsData } from 'utils/constants/ProjectData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectsData.filter(project => 
    (filter === 'All' || project.tags.includes(filter)) && 
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const technologyFilters = ['All', 'JavaScript', 'React', 'CSS', 'HTML', 'JSON'];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.filterContainer}>
        <div className={styles.filterButtons}>
          {technologyFilters.map(tech => (
            <button
              key={tech}
              className={`${styles.filterButton} ${filter === tech && styles.active}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search projects..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className={styles.projectList}>
        {filteredProjects.map(project => (
          <Link key={project.id} to={`/projects/${project.id}`} className={styles.project}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map(tag => (
                <span key={tag} className={`${styles.tag} ${styles[tag.toLowerCase()]}`}>
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
