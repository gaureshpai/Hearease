'use client';

import React, { useState, useEffect } from 'react';
import '@/public/styles/playlist.css';
import { useAudio } from '@/content/AudioContext';

const tracks = [
    'sounds/bird.mp3',
    'sounds/rain.mp3',
    'sounds/ocean waves.mp3',
    'sounds/ocean.mp3',
    'sounds/birds in river.mp3',
    'sounds/rain in forest.mp3',
    'sounds/birds humming.mp3',
    'sounds/thunder.mp3',
    'sounds/fire.mp3',
    'sounds/deep healing.mp3',
    'sounds/miracle.mp3',
    'sounds/healing.mp3'
];

const intervals = [1, 5, 10, 15, 20, 25, 30];

const Meditation = () => {
    const { playTrack, pauseTracks } = useAudio();
    const [activeTrack, setActiveTrack] = useState<string | null>(null);
    const [seconds, setSeconds] = useState(0);
    const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
    const [selectedInterval, setSelectedInterval] = useState(intervals[0] * 60);

    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;
        if (seconds > 0) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds <= 1) {
                        if (activeTrack) {
                            pauseTracks();
                            setActiveTrack(null);
                        }
                        clearInterval(intervalId!);
                        return 0;
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [seconds, activeTrack]);

    const handleStart = () => {
        if (activeTrack) {
            pauseTracks();
        }
        setActiveTrack(selectedTrack);
        playTrack(selectedTrack);
        setSeconds(selectedInterval);
    };

    const handleStop = () => {
        if (activeTrack) {
            pauseTracks();
            setActiveTrack(null);
        }
        setSeconds(0);
    };

    return (
        <div className="min-h-[80vh] bg-gray-900 text-white py-4 px-4 lg:px-16 lg:overflow-x-hidden">
            <div className="meditation-container text-center mb-8">
                <img src="/images/med.png" alt="Meditation" className="mx-auto mb-4 w-auto h-auto scale-150 object-contain" />
                <p className="text-xl italic mb-6">"Meditation is the key to tranquility and inner peace."</p>
                <div className='flex flex-col'>
                    <label htmlFor="track">Select meditation track</label>
                    <div className="mb-6"> 
                        <select
                            value={selectedTrack}
                            onChange={(e) => setSelectedTrack(e.target.value)}
                            className="bg-gray-800 text-white rounded-lg p-2"
                            aria-label="Select meditation track"
                        >
                            {tracks.map((track, index) => (
                                <option key={index} value={track}>
                                    {track.split('/').pop()?.replace('.mp3', '')}
                                </option>
                            ))}
                        </select>
                    </div>
                    <label htmlFor="track">Select time interval</label>
                    <div className="mb-6">
                        <select
                            value={selectedInterval}
                            onChange={(e) => setSelectedInterval(Number(e.target.value))}
                            className="bg-gray-800 text-white rounded-lg p-2"
                            aria-label="Select timer interval"
                        >
                            {intervals.map((interval, index) => (
                                <option key={index} value={interval * 60}>
                                    {interval} minutes
                                </option>
                            ))}
                        </select>
                    </div>
                </div>    
                <div className="mb-6">
                    <p className="text-2xl">{`${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`}</p>
                </div>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={handleStart}
                        className="start-button bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-3xl shadow-lg transition-all duration-300"
                    >
                        Start
                    </button>
                    <button
                        onClick={handleStop}
                        className="stop-button bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-3xl shadow-lg transition-all duration-300"
                    >
                        Stop
                    </button>
                </div>
                <div className='mt-6 text-center'>
                    <p className='text-center justify-center'>
                        Meditation is a practice of cultivating alertness and awareness in relation to each part of the body.
                        By focusing on and paying attention to every area of the body, you can develop a deeper connection with yourself.
                        This process involves purposeful, deep breathing, which helps calm the mind and reduce stress.
                        Regular meditation encourages mindfulness, allowing you to be fully present in the moment and promotes overall well-being.
                    </p>
                    <p className='mt-2'>Meditation methods include: </p>
                    <ul className="list-disc list-inside mt-3">
                        <li className='m-1'>Mindfulness: Focus on the breath and present moment.</li>
                        <li className='m-1'>Loving-Kindness: Repeat phrases of compassion.</li>
                        <li className='m-1'>Body Scan: Focus on different body parts.</li>
                        <li className='m-1'>Zen: Seated focus on breath or posture.</li>
                        <li className='m-1'>Guided: Follow instructions from a guide or recording.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Meditation;
