import React, { useState } from 'react';
import { useAudio } from '@/content/AudioContext';

interface TrackProps {
  track: string;
}

const Track: React.FC<TrackProps> = ({ track }) => {
  const { playTrack, pauseTrack, isPlaying, currentTracks, setTrackVolume } = useAudio();
  const [volume, setLocalVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(100);

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
    setTrackVolume(track, newVolume / 100);
    setIsMuted(false);
  };

  const toggleMute = () => {
    if (isMuted) {
      setTrackVolume(track, prevVolume / 100);
      setIsMuted(false);
      setLocalVolume(prevVolume);
    } else {
      setPrevVolume(volume);
      setTrackVolume(track, 0);
      setIsMuted(true);
      setLocalVolume(0);
    }
  };

  return (
    <div className="track-item p-2">
      <p>{cleanTrackName(track)}</p>
      <div className="flex items-center">
        <button className="play-button p-1 rounded mr-2" onClick={handlePlayPause}>
          <img
            src={`/images/${currentTracks.includes(track) ? 'pause' : 'play'}.png`}
            alt={currentTracks.includes(track) ? 'Pause' : 'Play'}
            className="w-6 h-6"
          />
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
