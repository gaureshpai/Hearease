import React from 'react';

const DownloadPage = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center bg-gray-900 p-5 min-h-[80vh]'>
            <h1 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
                Download Our Application
            </h1>
            <p className='text-lg md:text-xl mb-10 text-white'>
                Click the button below to download the application.
            </p>
            <div>
                <a
                    href="https://github.com/gaureshpai/Hearease/raw/main/app/download/Hearease.apk"
                    download
                    className='bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300'
                >
                    Download Now
                </a>
            </div>
        </div>
    );
};

export default DownloadPage;
