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
      github: 'https://github.com/shirha20'
    },
    {
      name:'Paandiya Varshini',
      linkedin: 'https://www.linkedin.com/in/',
      github: 'https://github.com/'
    },
    {
      name:'Karthika',
      linkedin: 'https://www.linkedin.com/in/',
      github: 'https://github.com/'
    }
  ];

  return (
    <div className='profile-container flex flex-wrap justify-center items-center bg-gray-900 p-8'>
      {profiles.map((profile, index) => (
        <div key={index} className="max-w-md rounded overflow-hidden shadow-lg bg-white m-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{profile.name}</div>
            <div className="mb-4">
              <p className="text-sm text-gray-700 mb-2">LinkedIn:</p>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>{profile.linkedin}</a>
            </div>
            <div>
              <p className="text-sm text-gray-700 mb-2">GitHub:</p>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>{profile.github}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
