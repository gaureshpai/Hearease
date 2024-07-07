import React from 'react';
import styles from '@/public/styles/Maincontent.module.css';

const MainContent = () => {
    return (
        <div className={styles.body}>
            <button className={styles.playButton}>Play</button>
        </div>
    )
}

export default MainContent;
