import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DownloadPage = () => {
    return (
        <div className="flex h-screen bg-gray-900 text-white">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header />
                <div className="flex flex-1 flex-col justify-center items-center text-center p-5">
                    <h1 className="mb-5 text-2xl">Download HearEase</h1>
                    <p className="mb-5">Explore the world of music with HearEase. Click the button below to download the app for free!</p>
                    <div className="mt-5">
                        <a href="/Hearease.apk" className="bg-green-600 text-white py-2 px-4 inline-block text-lg rounded transition duration-300 ease-in-out hover:bg-green-500" download>Download Now</a>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default DownloadPage;
