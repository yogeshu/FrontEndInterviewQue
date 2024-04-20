import React from 'react';
import styles from './Header.module.css';
import Navigation from './Navigation'; // Include Navigation if part of the header

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="/logo.png" alt="Company Logo" className={styles.logo} />
            <Navigation />  // Optional based on design choice
        </header>
    );
};

export default Header;
