'use client'

import React from 'react';
import { useAudio } from '@/content/AudioContext';

const Track: React.FC<{ track: string }> = ({ track }) => {
    const { playTrack } = useAudio();

    return (
        <div className="track-item bg-white p-2 my-2 flex items-center justify-between">
            <p>{track}</p>
            <button
                className="play-button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => playTrack(track)}
            >
                Play
            </button>
        </div>
    );
};

export default Track;
