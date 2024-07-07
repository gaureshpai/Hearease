import React from 'react';
import styles from '@/public/styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.controls}>
                <button>&#9664;&#9664;</button>
                <button>&#9654;</button>
                <button>&#9654;&#9654;</button>
            </div>
            <div className={styles.nowPlaying}>
                <p>Now Playing: Song Title</p>
            </div>
        </div>
    )
}

export default Footer;
