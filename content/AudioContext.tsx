'use client'

import React, { createContext, useState, useContext, useRef } from 'react';

interface AudioContextProps {
    currentTracks: string[];
    isPlaying: boolean;
    playTracks: (tracks: string[]) => void;
    pauseTracks: () => void;
}

const AudioContext = createContext<AudioContextProps | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTracks, setCurrentTracks] = useState<string[]>([]);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRefs = useRef<HTMLAudioElement[]>([]);

    const playTracks = (tracks: string[]) => {
        setCurrentTracks(tracks);
        audioRefs.current = tracks.map((track, index) => {
            const audio = new Audio(track);
            audio.play();
            return audio;
        });
        setIsPlaying(true);
    };

    const pauseTracks = () => {
        audioRefs.current.forEach(audio => audio.pause());
        setIsPlaying(false);
    };

    return (
        <AudioContext.Provider value={{ currentTracks, isPlaying, playTracks, pauseTracks }}>
            {children}
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
