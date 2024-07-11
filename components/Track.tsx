import React from 'react';
import { useAudio } from '@/content/AudioContext';

interface TrackProps {
  track: string;
  onClick: () => void;
}

const Track: React.FC<TrackProps> = ({ track }) => {
  const { playTrack, pauseTrack, isPlaying, currentTrack } = useAudio();

  const handlePlayPause = () => {
    if (isPlaying && track === currentTrack) {
      pauseTrack();
    } else {
      playTrack(track);
    }
  };

  const cleanTrackName = (track:any) => {
    const parts = track.split('/');
    const fileName = parts[parts.length - 1];

    const cleanName = fileName.replace('.mp3', '');

    return cleanName;
  };
  
  return (
    <div className="track-item">
      <p>{cleanTrackName(track)}s sound</p>
      <button
        className="play-button"
        onClick={handlePlayPause}
      >
        {isPlaying && track === currentTrack ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Track;
