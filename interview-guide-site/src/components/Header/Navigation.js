import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={styles.container}>
           <button onClick={toggleMenu} className={`${styles.menuButton} ${isOpen ? styles.active : ''}`} aria-label="Toggle Navigation">
    {isOpen ? '✕' : '☰'}
</button>

            <div className={isOpen ? styles.navOpen : styles.navClosed}>
                <Link to="/" className={styles.navLink} onClick={toggleMenu}><i className="fas fa-home"></i> Home</Link>
                <Link to="/chapters" className={styles.navLink} onClick={toggleMenu}><i className="fas fa-book-open"></i> Chapters</Link>
                <Link to="/exercises" className={styles.navLink} onClick={toggleMenu}><i className="fas fa-code"></i> Exercises</Link>
                <Link to="/contributions" className={styles.navLink} onClick={toggleMenu}><i className="fas fa-users"></i> Contributions</Link>

            </div>
        </div>
    );
};

export default Navigation;
