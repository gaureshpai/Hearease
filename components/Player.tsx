'use client'

import React from 'react';
import '@/public/styles/Player.css';
import { useAudio } from '@/content/AudioContext';

const Player = () => {
    const { isAllPlaying, playTracks, pauseTracks, isPlaying, currentTracks } = useAudio();

    const handlePlayPauseAll = () => {
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

    const handlePlayPause = () => {
        if (isAllPlaying || isPlaying) {
            pauseTracks();
        } else {
            playTracks(currentTracks);
        }
    };

    return (
        <div className='Player-container'>
            <div className='player-button-container'>
                <button className='player-buttons' onClick={isAllPlaying ? handlePlayPauseAll : handlePlayPause}>
                    <img src={`/images/${isAllPlaying || isPlaying ? '⏸' : '▶'}.png`} alt={isAllPlaying || isPlaying ? 'Pause All' : 'Play All'} />
                </button>
                {currentTracks.length > 0 && (
                    <div className='playing-tracks'>
                        <p>Currently Playing:</p>
                        <ul>
                            {currentTracks.map((track, index) => (
                                <li key={index}>{track.split('/').pop()?.replace('.mp3', '')}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Player;
