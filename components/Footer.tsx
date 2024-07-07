import React from 'react';

const Footer = () => {
    return (
        <div className="p-2.5 px-5 bg-gray-900 text-blue-50 flex items-center justify-between">
            <div className="flex items-center">
                <button className="bg-none border-none text-white text-xl mx-2.5 cursor-pointer">&#9664;&#9664;1</button>
                <button className="bg-none border-none text-white text-xl mx-2.5 cursor-pointer">&#9654;2</button>
                <button className="bg-none border-none text-white text-xl mx-2.5 cursor-pointer">&#9654;&#9654;3</button>
            </div>
            <div className="text-base">
                <p>Now Playing: Song Title</p>
            </div>
        </div>
    )
}

export default Footer;
