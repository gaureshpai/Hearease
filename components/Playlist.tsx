'use client'

import React, { useState } from 'react';
import Track from '@/components/Track';

const tracks = [
    'sounds/track1.mp3',
    'sounds/track2.mp3',
    'sounds/track3.mp3',
];

const Playlist = () => {
    const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

    const handleTrackClick = (track: string) => {
        setSelectedTrack(track);
        console.log(`Track '${track}' clicked`);
    };

    return (
        <div className="playlist-container bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-2xl mb-4 text-gray-800">Playlist</h2>
            <ul className="divide-y divide-gray-300">
                {tracks.map((track, index) => (
                    <li key={index}>
                        <Track
                            track={track}
                            onClick={() => handleTrackClick(track)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Playlist;

