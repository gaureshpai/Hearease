import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MainContent from '@/components/Maincontent';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="flex h-screen font-sans">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-gray-900 text-white">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  )
}

export default Home;
