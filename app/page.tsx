import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div 
      className="bg-blue-100 min-h-[75vh] md:min-h-[80vh] flex flex-col items-center justify-center p-8 text-center" 
      style={{
        backgroundImage: 'url(/images/bgb.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col mx-auto gap-10 text-center">
        <h1 className=" text-5xl text-center w-[100%] font-bold mb-6 text-black">
          Welcome to HearEase
        </h1>   
        <div className="flex bg-opacity-10 p-6 mb-8 max-w-full">
          <p className=" flex font-mono text-black w-[100%] text-xl max-w-[100%] text-center">
            "Rediscover the sound of silence with our tailored sound therapy, designed to bring peace to your tinnitus."
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-center">
          <Link href="/About" className="bg-teal-900 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              About Tinnitus
          </Link>
          <Link href="/Hearplay" className="bg-blue-500 hover:bg-teal-800 text-white font-bold py-3 px-5 rounded-full transition duration-300">
              Hearplay
          </Link>
          <Link href="/Hearelax" className="bg-teal-400 hover:bg-teal-800 text-white font-bold py-3 px-5 rounded-full transition duration-300">
              Hearelax
          </Link>
          <Link href="/download" className="bg-teal-900 hover:bg-blue-400 text-white font-bold py-3 px-5 rounded-full transition duration-300">
              Download App
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
