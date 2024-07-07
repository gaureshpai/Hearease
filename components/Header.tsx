import React from 'react';

const Header = () => {
    return (
        <div className="p-5 bg-gray-800 flex items-center rounded-full">
            <input
                type="text"
                placeholder="Search..."
                className="flex-1 p-2"
            />
        </div>
    )
}

export default Header;
