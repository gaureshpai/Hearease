import Link from 'next/link';
import React from 'react';
import '@/public/styles/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <p>&copy; 2024 HearEase. All rights reserved.</p>
            <div>
                <p>
                    <strong>
                        <Link href="/Profiles">View all contributors</Link>
                    </strong>
                </p>
            </div>
        </div>
    );
};

export default Footer;
