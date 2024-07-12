import React from 'react';
import { useAudio } from '@/content/AudioContext';

interface TrackProps {
  track: string;
  onClick: () => void;
}

const Track: React.FC<TrackProps> = ({ track }) => {
  const { playTracks, pauseTracks, isPlaying, currentTracks } = useAudio();

  const handlePlayPause = () => {
    if (isPlaying) {
      pauseTracks();
    } else {
      playTracks([track]);
    }
  };

  const cleanTrackName = (track: string) => {
    const parts = track.split('/');
    const fileName = parts[parts.length - 1];
    return fileName.replace('.mp3', '');
  };

  return (
    <div className="track-item">
      <p>{cleanTrackName(track)} sound</p>
      <button className="play-button" onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Track;
