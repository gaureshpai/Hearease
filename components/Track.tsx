import React from 'react';
import { useAudio } from '@/content/AudioContext';

interface TrackProps {
  track: string;
}

const Track: React.FC<TrackProps> = ({ track }) => {
  const { playTrack, pauseTrack, isPlaying, currentTrack } = useAudio();

  const handlePlayPause = () => {
    if (isPlaying && currentTrack === track) {
      pauseTrack();
    } else if (!isPlaying || currentTrack !== track) {
      playTrack(track);
    }
  };

  const cleanTrackName = (track: string) => {
    const parts = track.split('/');
    const fileName = parts[parts.length - 1];
    return fileName.replace('.mp3', '');
  };

  return (
    <div className="track-item p-2">
      <p>{cleanTrackName(track)}</p>
      <button className="play-button bg-blue-500 text-white p-2 rounded" onClick={handlePlayPause}>
        {isPlaying && currentTrack === track ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Track;
