'use client'

import React, { useState, useRef } from 'react';
import Track from '@/components/Track';
import '@/public/styles/playlist.css'

const tracks = [
  'sounds/bird.mp3',
  'sounds/rain.mp3',
  'sounds/ocean.mp3',
];

const Playlist = () => {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = (track: string) => {
    if (currentTrack === track) {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  return (
    <div className='playlist-container'>
      <h2>Playlist</h2>
      <ul className='track-container'>
        {tracks.map((track, index) => (
          <li key={index} className='individual'>
            <Track track={track} onClick={() => handlePlayPause(track)} />
          </li>
        ))}
      </ul>
      <audio ref={audioRef} src={`/sounds/${currentTrack}`} />
    </div>
  );
};

export default Playlist;
