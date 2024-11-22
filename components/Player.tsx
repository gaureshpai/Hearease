'use client'

import React, { useState } from 'react';
import '@/public/styles/Player.css';
import { useAudio } from '@/content/AudioContext';

const Player = () => {
    const { isAllPlaying, playTracks, pauseTracks, isPlaying, currentTracks, setVolume } = useAudio();
    const [volume, setLocalVolume] = useState(100);
    const [isMuted, setIsMuted] = useState(false);
    const [prevVolume, setPrevVolume] = useState(100);

    const handlePlayPauseAll = () => {
        if (isAllPlaying) {
            pauseTracks();
        } else {
            playTracks([
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
            ]);
        } else {
            playTracks(currentTracks);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseInt(e.target.value, 10);
        setLocalVolume(newVolume);
        setVolume(newVolume / 100);
        setIsMuted(newVolume === 0);
    };

    const toggleMute = () => {
        if (isMuted) {
            setVolume(prevVolume / 100);
            setIsMuted(false);
            setLocalVolume(prevVolume);
        } else {
            setPrevVolume(volume);
            setVolume(0);
            setIsMuted(true);
            setLocalVolume(0);
        }
    };

    return (
        <div className='Player-container'>
            <div className='name-container'>
                {currentTracks.length > 0 && (
                    <div className='playing-tracks'>
                        <a>Currently Playing: </a>
                        {currentTracks.map((track, index) => (
                            <a key={index}>-{track.split('/').pop()?.replace('.mp3', '')}-</a>
                        ))}
                    </div>
                )}
            </div>
            <div className='player-button-container'>
                <button className='player-buttons' onClick={isAllPlaying ? handlePlayPauseAll : handlePlayPause}>
                    <img src={`/images/${isAllPlaying || isPlaying ? 'pause' : 'play'}.png`} alt={isAllPlaying || isPlaying ? 'Pause All' : 'Play All'} />
                </button>
            </div>
            <div className='volume-container flex flex-row'>
                <img
                    src={`/images/${isMuted ? 'mute.png' : 'volume.png'}`}
                    alt='Volume'
                    className='volume-icon'
                    onClick={toggleMute}
                />
                <input
                    type='range'
                    aria-label='volume'
                    min='0'
                    max='100'
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className='volume-slider'
                />
            </div>
        </div>
    );
};

export default Player;
