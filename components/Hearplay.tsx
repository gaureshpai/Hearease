'use client';

import React from 'react';
import '@/public/styles/playlist.css';
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

const Playlist = () => {
    const { playTracks, pauseTracks, isAllPlaying } = useAudio();

    const handlePlayAll = () => {
        if (isAllPlaying) {
            pauseTracks();
        } else {
            playTracks(tracks);
        }
    };

    return (
        <div className="playlist-container min-h-[80vh] bg-gray-900 text-white py-8 px-4 lg:px-16 lg:overflow-x-hidden">
            <h2 className="text-4xl font-bold text-center mb-6">Hearease Player</h2>
            <div className="flex justify-center mb-6">
                <button onClick={handlePlayAll} className="play-all-button bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300">
                    {isAllPlaying ? 'Pause All' : 'Play All'}
                </button>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tracks.map((track, index) => (
                    <li key={index} className="individual bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <Track track={track} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Playlist;
