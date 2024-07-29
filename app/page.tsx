import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div 
      className="bg-gray-900 min-h-[75vh] md:min-h-[80vh] flex flex-col items-center justify-center p-8 text-center" 
      style={{
        backgroundImage: 'url(/images/bgb.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col mx-auto gap-10 text-center">
        <h1 className=" text-5xl text-center w-[100%] font-bold mb-6 text-white">
          Welcome to HearEase
        </h1>   
        <div className="flex bg-opacity-10 p-6 mb-8 max-w-full">
          <p className=" flex italic text-white w-[100%] text-xl max-w-[100%] text-center">
            "Rediscover the sound of silence with our tailored sound therapy, designed to bring peace to your tinnitus."
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-center">
          <Link href="/About" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded transition duration-300">
              About Tinnitus
          </Link>
          <Link href="/Hearplay" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded transition duration-300">
              Hearplay
          </Link>
          <Link href="/Hearelax" className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-3 px-5 rounded transition duration-300">
              Hearelax
          </Link>
          <Link href="/download" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-5 rounded transition duration-300">
              Download App
          </Link>
          <Link href="/Contributors" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-5 rounded transition duration-300">
              View Contributors
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
