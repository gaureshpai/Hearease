'use client';

import React from 'react';
import '@/public/styles/playlist.css'
import Track from '@/components/Track';
import { useAudio } from '@/content/AudioContext';

const tracks = [
  'sounds/bird.mp3',
  'sounds/rain.mp3',
  'sounds/ocean waves.mp3',
  'sounds/ocean.mp3',
  'sounds/birds in river.mp3',
  'sounds/rain in forest.mp3'
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
    <div className="playlist-container bg-gray-900 text-white py-4 px-2 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-4">Hearease Player</h2>
      <div className="flex justify-center mb-4">
        <button onClick={handlePlayAll} className="play-all-button bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          {isAllPlaying ? 'Pause All' : 'Play All'}
        </button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tracks.map((track, index) => (
          <li key={index} className="individual bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <Track track={track} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
