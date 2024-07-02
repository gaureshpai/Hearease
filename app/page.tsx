import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MainContent from '@/components/Maincontent';
import Footer from '@/components/Footer';
import styles from '@/public/styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  )
}

export default Home;
