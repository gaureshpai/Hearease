import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div>
                <p>&copy; 2024 HearEase. All rights reserved.</p>
                <div>
                    <p>
                        <strong>
                            <Link href="/Profiles">View all contributors</Link>
                        </strong>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
