'use client'
import React, { createContext, useState, useContext, useRef } from 'react';

interface AudioContextProps {
    currentTracks: string[];
    currentTrack: string | null;
    isPlaying: boolean;
    isAllPlaying: boolean;
    playTrack: (track: string) => void;
    playTracks: (tracks: string[]) => void;
    pauseTrack: (track: string) => void;
    pauseTracks: () => void;
    setVolume: (volume: number) => void;
}

const AudioContext = createContext<AudioContextProps | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTracks, setCurrentTracks] = useState<string[]>([]);
    const [currentTrack, setCurrentTrack] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isAllPlaying, setIsAllPlaying] = useState<boolean>(false);
    const audioRefs = useRef<Map<string, HTMLAudioElement>>(new Map());

    const playTrack = (track: string) => {
        if (!audioRefs.current.has(track)) {
            const audio = new Audio(track);
            audioRefs.current.set(track, audio);
        }
        const audio = audioRefs.current.get(track);
        audio?.play();
        setCurrentTracks(prevTracks => [...prevTracks, track]);
        setCurrentTrack(track);
        setIsPlaying(true);
    };

    const playTracks = (tracks: string[]) => {
        tracks.forEach((track) => {
            if (!audioRefs.current.has(track)) {
                const audio = new Audio(track);
                audioRefs.current.set(track, audio);
            }
            const audio = audioRefs.current.get(track);
            audio?.play();
        });
        setCurrentTracks(tracks);
        setIsAllPlaying(true);
        setIsPlaying(true);
    };

    const pauseTrack = (track: string) => {
        const audio = audioRefs.current.get(track);
        audio?.pause();
        setCurrentTracks(prevTracks => prevTracks.filter(t => t !== track));
        if (currentTracks.length === 1) {
            setIsPlaying(false);
            setCurrentTrack(null);
        }
    };

    const pauseTracks = () => {
        audioRefs.current.forEach((audio) => audio.pause());
        setIsAllPlaying(false);
        setIsPlaying(false);
        setCurrentTracks([]);
        setCurrentTrack(null);
    };

    const setVolume = (volume: number) => {
        audioRefs.current.forEach((audio) => {
            audio.volume = volume;
        });
    };

    return (
        <AudioContext.Provider
            value={{ currentTracks, currentTrack, isPlaying, isAllPlaying, playTrack, playTracks, pauseTrack, pauseTracks, setVolume }}
        >
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
