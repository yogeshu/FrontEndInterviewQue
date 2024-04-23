import React, { useState } from 'react';
import styles from './ProjectDetail.module.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useParams } from 'react-router-dom';
import {projectsData} from 'utils/constants/ProjectData';

  const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectsData.find((ex) => ex.id === parseInt(projectId));
    const [showCode, setShowCode] = useState(false);
  
    // Find the project by ID
  
    const toggleCodeVisibility = () => {
      setShowCode(!showCode);
    };
  
    if (!project) {
      return <div>Project not found</div>; // Handling cases where the project is not found
    }
  
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.difficultyTag}>
            <span className={styles.difficultyLabel}>Difficulty:</span>
            <span className={`${styles.difficultyValue} ${styles[project.difficulty.toLowerCase()]}`}>
              {project.difficulty}
            </span>
          </div>
        </div>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.detailsContainer}>
          <h2 className={styles.detailsTitle}>Project Details</h2>
          <p className={styles.detailsText}>{project.details}</p>
        </div>
        <div className={styles.codeContainer}>
          <button className={styles.codeButton} onClick={toggleCodeVisibility}>
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
          {showCode && (
            <SyntaxHighlighter language="javascript" style={dark}>
              {project.code}
            </SyntaxHighlighter>
          )}
        </div>
      </div>
    );
  };
  
  export default ProjectDetail;
