'use client'

import React, { useState, useEffect } from 'react';
import { useDevice } from './use-device';

const DownloadPage = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
    const { isMobile, isStandalone } = useDevice();

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: Event) => {
            // Prevent the mini-infobar from appearing on desktop
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
        // Mobile devices (iOS)
        if (isMobile && !isStandalone) {
            // For iOS, provide instructions
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                !(navigator as any).standalone &&
                !window.navigator.userAgent.match(/CriOS/i);

            if (isIOS) {
                alert('To install the app:\n1. Tap the Share button\n2. Select "Add to Home Screen"');
                return;
            }

            // For Android and other mobile platforms
            if (deferredPrompt) {
                const promptEvent = deferredPrompt as any;
                try {
                    await promptEvent.prompt();
                    const choiceResult = await promptEvent.userChoice;

                    if (choiceResult.outcome === 'accepted') {
                        console.log('PWA installation accepted');
                    } else {
                        console.log('PWA installation dismissed');
                    }

                    setDeferredPrompt(null);
                } catch (error) {
                    console.error('Installation failed', error);
                }
            }
        }
        // Desktop or already standalone
        else {
            if (isStandalone) {
                alert('The app is already installed.');
                return;
            }

            alert("Please use your browser's install option or download from the app store.");
        }
    };

    // Hide install button if already in standalone mode
    if (isStandalone) {
        return null;
    }

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