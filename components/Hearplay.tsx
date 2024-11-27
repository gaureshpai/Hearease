'use client';

import React from 'react';
import Track from '@/components/Track';
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

const Hearplay = () => {
    const { playTracks, pauseTracks, isAllPlaying } = useAudio();

    const handlePlayAll = () => {
        if (isAllPlaying) {
            pauseTracks();
        } else {
            playTracks(tracks);
        }
    };

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-8 px-4 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-8 text-green-400">Hearease Player</h2>
                <div className="flex justify-center mb-8">
                    <button
                        onClick={handlePlayAll}
                        className="bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center"
                    >
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            {isAllPlaying ? (
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            ) : (
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            )}
                        </svg>
                        {isAllPlaying ? 'Pause All' : 'Play All'}
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tracks.map((track, index) => (
                        <Track key={index} track={track} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hearplay;