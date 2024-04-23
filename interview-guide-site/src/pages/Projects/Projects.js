import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Projects.module.css'; // Assuming CSS module for styling
import {projectsData} from 'utils/constants/ProjectData';


const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = filter === 'All'
    ? projectsData.filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : projectsData.filter(project => project.difficulty.toLowerCase() === filter.toLowerCase() && project.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.filterContainer}>
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterButton} ${filter === 'All' && styles.active}`}
            onClick={() => setFilter('All')}
          >
            All
          </button>
          <button
            className={`${styles.filterButton} ${filter.toLowerCase() === 'easy' && styles.active}`}
            onClick={() => setFilter('Easy')}
          >
            Easy
          </button>
          <button
            className={`${styles.filterButton} ${filter.toLowerCase() === 'medium' && styles.active}`}
            onClick={() => setFilter('Medium')}
          >
            Medium
          </button>
          <button
            className={`${styles.filterButton} ${filter.toLowerCase() === 'hard' && styles.active}`}
            onClick={() => setFilter('Hard')}
          >
            Hard
          </button>
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
            <span className={`${styles.tag} ${styles[project.difficulty.toLowerCase()]}`}>
              {project.difficulty}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
