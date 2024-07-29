import React from 'react';
import '@/public/styles/profile.css'

const Profiles = () => {
    const profiles = [
        {
            name: 'Dhanya Shetty',
            linkedin: 'https://www.linkedin.com/in/dhanyashetty212/',
            github: 'https://github.com/dhanya212/'
        },
        {
            name: 'Harshitha',
            linkedin: 'https://www.linkedin.com/in/harshitha2007/',
            github: 'https://github.com/shirha20/'
        },
        {
            name: 'Paandiya Varshini',
            linkedin: 'https://www.linkedin.com/in/m-paandiya-varshini-0b70222a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/paandiyavarshini'
        },
        {
            name: 'Karthika',
            linkedin: 'https://www.linkedin.com/in/karthika-raj-p-7041202a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            github: 'https://github.com/KarthikaRajP'
        }
    ];

    return (
        <div className='profile-container flex flex-wrap justify-center items-center bg-gray-900 p-8 overflow-auto'>
            {profiles.map((profile, index) => (
                <div key={index} className="max-w-lg rounded overflow-hidden shadow-lg bg-white m-4">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{profile.name}</div>
                        <div className="mb-4">
                            <p className="text-base text-gray-700 mb-2">LinkedIn:<a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'> link</a></p>
                            
                        </div>
                        <div>
                            <p className="text-base text-gray-700 mb-2">GitHub:<a href={profile.github} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>link</a></p>
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Profiles;
