'use client'

import React, { useState, useEffect } from 'react';

const DownloadPage = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: Event) => {
            // Prevent the mini-infobar from appearing
            e.preventDefault();
            // Save the event so it can be triggered later
            setDeferredPrompt(e);
        };

        // Listen for the `beforeinstallprompt` event
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            const promptEvent = deferredPrompt as any;
            // Show the install prompt
            promptEvent.prompt();
            // Wait for the user's response
            const choiceResult = await promptEvent.userChoice;
            if (choiceResult.outcome === 'accepted') {
                console.log('PWA installation accepted');
            } else {
                console.log('PWA installation dismissed');
            }
            // Clear the saved prompt event
            setDeferredPrompt(null);
        } else {
            alert("The app cannot be installed. Make sure you're on a compatible browser.");
        }
    };

    return (
        <div className='flex flex-col items-center justify-center text-center bg-gray-900 p-5 min-h-[80vh]'>
            <h1 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
                Install Our Application
            </h1>
            <p className='text-lg md:text-xl mb-10 text-white'>
                Click the button below to install the application on your device.
            </p>
            <div>
                <button
                    onClick={handleInstallClick}
                    className='bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300'
                >
                    Install Now
                </button>
            </div>
        </div>
    );
};

export default DownloadPage;