'use client'

import React from 'react';
import '@/public/styles/Player.css';
import { useAudio } from '@/content/AudioContext';

const Player = () => {
    const { isAllPlaying, playTracks, pauseTracks } = useAudio();

    const handlePlayPause = () => {
        if (isAllPlaying) {
            pauseTracks();
        } else {
            playTracks([
                'sounds/bird.mp3',
                'sounds/rain.mp3',
                'sounds/ocean.mp3'
            ]);
        }
    };

    return (
        <div className='Player-container'>
            <div className='player-button-container'>
                <button className='player-buttons' onClick={handlePlayPause}>
                    <img src={`/images/${isAllPlaying ? '⏸' : '▶'}.png`} alt={isAllPlaying ? 'Pause' : 'Play'} />
                </button>
            </div>
        </div>
    );
};

export default Player;
