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
  ];

  return (
    <div className='profile-container'>
      {profiles.map((profile, index) => (
        <div key={index} className="profile">
          <h2>{profile.name}</h2>
          <p>LinkedIn: <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a></p>
          <p>GitHub: <a href={profile.github} target="_blank" rel="noopener noreferrer">{profile.github}</a></p>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
