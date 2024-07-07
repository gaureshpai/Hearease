import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/public/styles/DownloadPage.module.css'; // Importing CSS Module

const DownloadPage = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainContent}>
                <Header />
                <div className={styles.downloadContent}>
                    <h1>Download HearEase</h1>
                    <p>Explore the world of music with HearEase. Click the button below to download the app for free!</p>
                    <div className={styles.downloadButtonContainer}>
                        <a href="/Hearease.apk" className={styles.btnDownload} download>Download Now</a>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default DownloadPage;
