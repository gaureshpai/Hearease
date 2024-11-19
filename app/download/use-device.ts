import { useState, useEffect } from 'react';

export const useDevice = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);

    useEffect(() => {
        // Check if running in standalone mode
        const checkStandalone = () => {
            const isStandaloneMode =
                (window.matchMedia('(display-mode: standalone)').matches) ||
                (navigator as any).standalone === true;

            setIsStandalone(isStandaloneMode);
        };

        // Check for mobile devices
        const checkMobile = () => {
            const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            setIsMobile(mobileCheck);
        };

        // Initial check
        checkStandalone();
        checkMobile();

        // Listen for display mode changes
        const mediaQuery = window.matchMedia('(display-mode: standalone)');
        mediaQuery.addListener(checkStandalone);

        return () => {
            mediaQuery.removeListener(checkStandalone);
        };
    }, []);

    return { isMobile, isStandalone };
};