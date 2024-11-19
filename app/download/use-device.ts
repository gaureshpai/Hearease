import { useState, useEffect } from 'react';

export function useDevice() {
    const [isMobile, setIsMobile] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);

    useEffect(() => {
        const checkStandalone = () => {
            const isStandaloneMode =
                window.matchMedia('(display-mode: standalone)').matches ||
                (window.navigator as any).standalone === true;
            setIsStandalone(isStandaloneMode);
        };

        const checkMobile = () => {
            const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            setIsMobile(mobileCheck);
        };

        checkStandalone();
        checkMobile();

        const mediaQuery = window.matchMedia('(display-mode: standalone)');
        mediaQuery.addListener(checkStandalone);

        window.addEventListener('resize', checkMobile);

        return () => {
            mediaQuery.removeListener(checkStandalone);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return { isMobile, isStandalone };
}