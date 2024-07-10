'use client'

import React, { useState } from 'react';

const CreatePlaylist = () => {
    const [playlistName, setPlaylistName] = useState('');

    const handleCreatePlaylist = () => {
        // Add logic to create playlist
        console.log(`Playlist created: ${playlistName}`);
    };

    return (
        <div>
            <h1>Create Playlist</h1>
            <input 
                type="text" 
                value={playlistName} 
                onChange={(e) => setPlaylistName(e.target.value)} 
                placeholder="Enter playlist name" 
            />
            <button onClick={handleCreatePlaylist}>Create</button>
        </div>
    );
};

export default CreatePlaylist;
