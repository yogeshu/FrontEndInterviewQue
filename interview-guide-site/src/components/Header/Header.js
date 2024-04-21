import React from 'react';
import styles from './Header.module.css';

import Navigation from './Navigation'; // Include Navigation if part of the header
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.brand}>
          <i className="fas fa-book"></i> My Learning App
        </Link>
            <Navigation />  // Optional based on design choice
        </header>
    );
};

export default Header;
