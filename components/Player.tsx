import React from 'react';
import '@/public/styles/Player.css'

const Player = () => {
    return (
        <div className='Player-container'>
            <div className='player-button-container'>
                <button className='player-buttons'><img src='/images/▶.png' alt='play'/></button>
            </div>
        </div>
    );
};

export default Player;
