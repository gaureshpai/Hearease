'use client'

import React, { useState, useRef } from 'react';
import Track from '@/components/Track';

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
    <div>
      <h2>Playlist</h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>
            <Track track={track} onClick={() => handlePlayPause(track)} />
          </li>
        ))}
      </ul>
      <audio ref={audioRef} src={`/sounds/${currentTrack}`} />
    </div>
  );
};

export default Playlist;
