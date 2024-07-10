'use client'

import React, { createContext, useState, useContext, useRef } from 'react';

interface AudioContextProps {
    currentTrack: string;
    isPlaying: boolean;
    playTrack: (track: string) => void;
    pauseTrack: () => void;
}

const AudioContext = createContext<AudioContextProps | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState<string>('');
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playTrack = (track: string) => {
        setCurrentTrack(track);
        if (audioRef.current) {
            audioRef.current.src = track;
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const pauseTrack = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <AudioContext.Provider value={{ currentTrack, isPlaying, playTrack, pauseTrack }}>
            {children}
            <audio ref={audioRef} />
        </AudioContext.Provider>
    );
};

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
};
