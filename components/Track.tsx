// Track.tsx
import React from 'react';
import { useAudio } from '@/content/AudioContext';

interface TrackProps {
  track: string;
}

const Track: React.FC<TrackProps> = ({ track }) => {
  const { playTrack, pauseTrack, isPlaying } = useAudio();

  const handlePlayPause = () => {
    if (isPlaying && track === isPlaying.track) {
      pauseTrack(); // Pause if currently playing the same track
    } else {
      playTrack(track); // Play the track
    }
  };

  return (
    <div className="track-item bg-white p-2 my-2 flex items-center justify-between">
      <p>{track}</p>
      <button
        className="play-button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handlePlayPause} // onClick handler to toggle play/pause
      >
        {isPlaying && track === isPlaying.track ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Track;
