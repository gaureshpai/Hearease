import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-[75vh] md:min-h-[80vh] flex flex-col items-center justify-center p-8 text-center" style={{ backgroundImage: 'url(images/background.png)'}}>
      <div className="flex flex-col mx-auto text-center">
        <h1 className=" text-5xl text-center w-[100%] font-extrabold mb-6 text-white">
          Welcome to HearEase
        </h1>
        <div className="flex bg-white bg-opacity-10 p-6 rounded-lg shadow-lg mb-8 max-w-full">
          <p className=" flex italic text-white w-[100%] max-w-[100%] text-center">
            "Rediscover the sound of silence with our tailored sound therapy, designed to bring peace to your tinnitus."
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-center">
          <Link href="/About" legacyBehavior>
            <a className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded transition duration-300">
              About Tinnitus
            </a>
          </Link>
          <Link href="/Hearplay" legacyBehavior>
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded transition duration-300">
              Hearplay
            </a>
          </Link>
          <Link href="/Contributors" legacyBehavior>
            <a className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-5 rounded transition duration-300">
              View Contributors
            </a>
          </Link>
          <Link href="/download" legacyBehavior>
            <a className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-5 rounded transition duration-300">
              Download App
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
