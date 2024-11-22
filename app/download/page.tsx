'use client';

import React, { useState, useEffect } from 'react';

export default function DownloadPage() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);

    useEffect(() => {
        const checkStandalone = () => {
            const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) && (window.navigator as any).standalone;
            const isPWA = window.matchMedia('(display-mode: standalone)').matches;

            setIsStandalone(isIOS || isPWA);
        };

        const checkMobile = () => {
            setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
        };

        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };

        checkStandalone();
        checkMobile();
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (isMobile) {
            const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) && !(window.navigator as any).standalone;

            if (isIOS) {
                alert('To add to home screen:\n1. Tap the Share button\n2. Select "Add to Home Screen"');
            } else if (deferredPrompt) {
                try {
                    await deferredPrompt.prompt();
                    const choiceResult = await deferredPrompt.userChoice;
                    if (choiceResult.outcome === 'accepted') {
                        console.log('PWA installation accepted');
                    } else {
                        console.log('PWA installation dismissed');
                    }
                    setDeferredPrompt(null);
                } catch (error) {
                    console.error('Installation failed', error);
                }
            } else {
                alert('To add to home screen, use your browser\'s install option.');
            }
        } else if (deferredPrompt) {
            try {
                await deferredPrompt.prompt();
                const choiceResult = await deferredPrompt.userChoice;
                if (choiceResult.outcome === 'accepted') {
                    console.log('PWA installation accepted');
                } else {
                    console.log('PWA installation dismissed');
                }
                setDeferredPrompt(null);
            } catch (error) {
                console.error('Installation failed', error);
            }
        } else {
            alert('To install, use your browser\'s install option or download from the app store.');
        }
    };

    if (isStandalone) {
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center text-center bg-gray-900 p-5 min-h-[80vh]">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                {isMobile ? 'Add to Home Screen' : 'Install Our Application'}
            </h1>
            <p className="text-lg md:text-xl mb-10 text-white">
                {isMobile
                    ? 'Add our app to your home screen for quick and easy access.'
                    : 'Install our application on your device for the best experience.'}
            </p>
            <div>
                <button
                    onClick={handleInstallClick}
                    className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300"
                >
                    {isMobile ? 'Add to Home Screen' : 'Install Now'}
                </button>
            </div>
        </div>
    );
}