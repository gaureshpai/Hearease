import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-gray-300 py-4 text-center fixed bottom-0 w-full">
            <div className="container mx-auto">
                <p>&copy; 2024 HearEase. All rights reserved.</p>
                <div className="mt-2 flex items-center justify-center text-sm">
                    <p className="text-gray-400">
                        <strong className="text-white">
                            <Link href="/Profiles" className="hover:text-gray-400">View all contributors</Link>
                        </strong>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
