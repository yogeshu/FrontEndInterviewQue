import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Exercises.module.css';

const exercisesData = [
  { id: 1, title: "CSS Box Model", description: "Understand how the CSS box model works.", difficulty: "Easy", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit et risus auctor scelerisque eu eu lacus. Sed fringilla libero sit amet eros efficitur, a lacinia ligula convallis." },
  { id: 2, title: "Flexbox Layout", description: "Create a layout using CSS Flexbox.", difficulty: "Medium", details: "Vestibulum id ligula sed quam convallis maximus. Nam ultricies libero vel purus interdum dictum. Curabitur ac odio vitae eros dapibus tristique." },
  { id: 3, title: "React State", description: "Manage state in a React component without hooks.", difficulty: "Hard", details: "Donec vitae eros nec sapien ultricies malesuada. Nulla facilisi. Integer eget sollicitudin justo. Cras suscipit velit vel diam ultricies, vel varius dui dictum." }
];

const Exercises = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExercises = filter === 'All'
    ? exercisesData.filter(ex => ex.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : exercisesData.filter(ex => ex.difficulty.toLowerCase() === filter.toLowerCase() && ex.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Exercises</h1>
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
            placeholder="Search exercises..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className={styles.exerciseList}>
        {filteredExercises.map(exercise => (
          <Link key={exercise.id} to={`/exercises/${exercise.id}`} className={styles.exercise}>
            <h2 className={styles.exerciseTitle}>{exercise.title}</h2>
            <p className={styles.exerciseDescription}>{exercise.description}</p>
            <span className={`${styles.tag} ${styles[exercise.difficulty.toLowerCase()]}`}>
              {exercise.difficulty}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
