'use client'

import React, { useState } from 'react';
import '@/public/styles/Player.css';
import { useAudio } from '@/content/AudioContext';

const Player = () => {
    const { isAllPlaying, playTracks, pauseTracks, isPlaying, currentTracks, setVolume } = useAudio();
    const [volume, setLocalVolume] = useState(50);

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
        } else if (!isAllPlaying || !isPlaying) {
            playTracks([
                'sounds/bird.mp3',
                'sounds/rain.mp3',
                'sounds/ocean.mp3'
            ]);
        } else {
            playTracks(currentTracks);
        }
    };

    const handleVolumeChange = (e:any) => {
        const newVolume = parseInt(e.target.value);
        setLocalVolume(newVolume);
        setVolume(newVolume / 100);
    };

    return (
        <div className='Player-container'>
            <div className='name-container'>
                {currentTracks.length > 0 && (
                    <div className='playing-tracks'>
                        <a>Currently Playing:</a>
                        {currentTracks.map((track, index) => (
                            <a key={index}>{track.split('/').pop()?.replace('.mp3', '')}   </a>
                        ))}
                    </div>
                )}
            </div>
            <div className='player-button-container'>
                <button className='player-buttons' onClick={isAllPlaying ? handlePlayPauseAll : handlePlayPause}>
                    <img src={`/images/${isAllPlaying || isPlaying ? '⏸' : '▶'}.png`} alt={isAllPlaying || isPlaying ? 'Pause All' : 'Play All'} />
                </button>
            </div>
            <div className='volume-container flex flex-row'>
                <img src={`/images/volume.png`} alt='Volume' className='volume-icon' />
                <input
                    type='range'
                    aria-label='volume'
                    min='0'
                    max='100'
                    value={volume}
                    onChange={handleVolumeChange}
                    className='volume-slider'
                />
            </div>
        </div>
    );
};

export default Player;
