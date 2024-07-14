import React, { useState } from 'react';
import { useAudio } from '@/content/AudioContext';

interface TrackProps {
  track: string;
}

const Track: React.FC<TrackProps> = ({ track }) => {
  const { playTrack, pauseTrack, isPlaying, currentTracks, setVolume } = useAudio();
  const [volume, setLocalVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(50);

  const handlePlayPause = () => {
    if (currentTracks.includes(track)) {
      pauseTrack(track);
    } else {
      playTrack(track);
    }
  };

  const cleanTrackName = (track: string) => {
    const parts = track.split('/');
    const fileName = parts[parts.length - 1];
    return fileName.replace('.mp3', '');
  };

  const handleVolumeChange = (e: any) => {
    const newVolume = parseInt(e.target.value);
    setLocalVolume(newVolume);
    setVolume(newVolume / 100);
    setIsMuted(false);
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
    <div className="track-item p-2">
      <p>{cleanTrackName(track)}</p>
      <div className="flex items-center">
        <button className="play-button bg-blue-500 text-white p-2 rounded mr-2" onClick={handlePlayPause}>
          {currentTracks.includes(track) ? 'Pause' : 'Play'}
        </button>
        <img
          src={`/images/${isMuted ? 'mute.png' : 'volume.png'}`}
          alt="Volume"
          className="volume-icon cursor-pointer"
          onClick={toggleMute}
        />
        <input
          type="range"
          aria-label="volume"
          min="0"
          max="100"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
      </div>
    </div>
  );
};

export default Track;
