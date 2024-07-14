'use client'

import React from 'react';
import Track from '@/components/Track';
import '@/public/styles/playlist.css';
import { useAudio } from '@/content/AudioContext';

const tracks = [
  'sounds/bird.mp3',
  'sounds/rain.mp3',
  'sounds/ocean.mp3',
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
    <div className='playlist-container'>
      <h2>Playlist</h2>
      <button onClick={handlePlayAll} className="play-all-button">
        {isAllPlaying ? 'Pause All' : 'Play All'}
      </button>
      <ul className='track-container'>
        {tracks.map((track, index) => (
          <li key={index} className='individual'>
            <Track track={track} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
