'use client'

import React, { createContext, useState, useContext, useRef } from 'react';

interface AudioContextProps {
    currentTrack: string | null;
    currentTracks: string[];
    isPlaying: boolean;
    isAllPlaying: boolean;
    playTracks: (tracks: string[]) => void;
    playTrack: (track: string) => void;
    pauseTracks: () => void;
    pauseTrack: () => void;
}

const AudioContext = createContext<AudioContextProps | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState<string | null>(null);
    const [currentTracks, setCurrentTracks] = useState<string[]>([]);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isAllPlaying, setIsAllPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioRefs = useRef<HTMLAudioElement[]>([]);

    const playTracks = (tracks: string[]) => {
        setCurrentTracks(tracks);
        audioRefs.current = tracks.map((track, index) => {
            const audio = new Audio(track);
            audio.play();
            return audio;
        });
        setIsAllPlaying(true);
    };

    const playTrack = (track: string) => {
        if (currentTrack !== track) {
            setCurrentTrack(track);
            if (audioRef.current) {
                audioRef.current.src = track;
                audioRef.current.play();
            }
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(true);
    };

    const pauseTracks = () => {
        audioRefs.current.forEach(audio => audio.pause());
        setIsAllPlaying(false);
    };

    const pauseTrack = () => {
        audioRef.current?.pause();
        setIsPlaying(false);
    };

    return (
        <AudioContext.Provider value={{ currentTrack, currentTracks, isPlaying, isAllPlaying, playTracks, playTrack, pauseTracks, pauseTrack }}>
            <audio ref={audioRef} />
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
