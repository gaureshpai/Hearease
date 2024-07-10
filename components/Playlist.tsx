'use client'
import React from 'react';
import Track from './Track';

const tracks = [
    'sounds/track1.mp3',
    'sounds/track2.mp3',
    'sounds/track3.mp3',
];

const Playlist = () => {
    return (
        <div className="playlist-container bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-2xl mb-4 text-gray-800">Playlist</h2>
            <ul className="divide-y divide-gray-300">
                {tracks.map((track, index) => (
                    <li key={index}>
                        <Track track={track} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Playlist;
