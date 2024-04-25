import React from 'react';
import styles from './Header.module.css';

import Navigation from './Navigation'; 
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.brand}>
          <i className="fas fa-book"></i> My Learning App
        </Link>
            <Navigation />  
        </header>
    );
};

export default Header;
