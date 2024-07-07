import React from 'react';
import styles from '@/public/styles/Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <input type="text" placeholder="Search..." style={{ flex: 1, padding: '5px' }} />
        </div>
    )
}

export default Header;
