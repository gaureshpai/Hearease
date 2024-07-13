import React from 'react';
import '@/public/styles/download.css'

const DownloadPage = () => {

    return (
        <div className='download-container'>
            <h1>Download Our Application</h1>
            <p>Click the button below to download the application.</p>
            <div className='download-button'>
                <a href="/hearease.apk" download>Download Now</a>
            </div>
        </div>
    );
};

export default DownloadPage;
