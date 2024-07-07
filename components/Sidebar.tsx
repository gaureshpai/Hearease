import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="w-64 bg-blue-600 text-gray-800 flex flex-col justify-between p-5">
            <div>
                <h1 className="m-0 text-2xl font-bold">HearEase</h1>
                <nav className="mt-4">
                    <Link href="/" legacyBehavior>
                        <a className="text-white no-underline mb-4 block font-semibold">Home</a>
                    </Link>
                    <Link href="/" legacyBehavior>
                        <a className="text-white no-underline mb-4 block font-semibold">Search</a>
                    </Link>
                    <Link href="/" legacyBehavior>
                        <a className="text-white no-underline mb-4 block font-semibold">Library</a>
                    </Link>
                </nav>
            </div>
            <nav className="mt-4">
                <Link href="/" legacyBehavior>
                    <a className="text-white no-underline mb-4 block font-semibold">Create Playlist</a>
                </Link>
                <Link href="/" legacyBehavior>
                    <a className="text-white no-underline mb-4 block font-semibold">Liked Songs</a>
                </Link>
                <Link href="/download" legacyBehavior>
                    <a className="text-white no-underline mb-4 block font-semibold">Download</a>
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
