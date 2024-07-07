import React from 'react';

const DownloadPage = () => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Download Our Application</h1>
                <p>Click the button below to download the application.</p>
                <div style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px', cursor: 'pointer' }}>
                    <a href="/Hearease.apk" download>Download Now</a>
                </div>
            </div>
        </div>
    );
};

export default DownloadPage;
