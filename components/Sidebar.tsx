import React from 'react';
import Link from 'next/link';
import styles from '@/public/styles/Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div>
                <h1>HearEase</h1>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/">Search</Link>
                    <Link href="/">Library</Link>
                </nav>
            </div>
            <nav>
                <Link href="/">Create Playlist</Link>
                <Link href="/">Liked Songs</Link>
                <Link href="/download">Download</Link>
            </nav>
        </div>
    );
};

export default Sidebar;
