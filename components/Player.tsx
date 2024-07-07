import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="controls">
                <button>&#9664;&#9664;</button>
                <button>&#9654;</button>
                <button>&#9654;&#9654;</button>
            </div>
            <div className="now-playing">
                <p>Now Playing: Song Title</p>
            </div>
        </div>
    );
};

export default Footer;
