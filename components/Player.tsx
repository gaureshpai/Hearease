'use client'

import React from 'react';
import '@/public/styles/Player.css';
import { useAudio } from '@/content/AudioContext';

const Player = () => {
    const { isPlaying, playTrack, pauseTrack, currentTrack } = useAudio();

    const handlePlayPause = () => {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack(currentTrack);
        }
    };

    return (
        <div className='Player-container'>
            <div className='player-button-container'>
                <button className='player-buttons' onClick={handlePlayPause}>
                    <img src={`/images/${isPlaying ? '⏸' : '▶'}.png`} alt={isPlaying ? 'pause' : 'play'} />
                </button>
            </div>
        </div>
    );
};

export default Player;
