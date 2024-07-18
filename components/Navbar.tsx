import React from 'react'
import Link from 'next/link'
import '@/public/styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar bg-black text-white flex justify-between items-center p-2 w-full h-20">
      <div className="heading text-4xl ml-8">
        <Link href="/">HearEase</Link>
      </div>
      <div className="download text-base mt-1 mr-8 p-2 ">
        <Link href="/download">Download App</Link>
      </div>   
    </div>
  )
}

export default Navbar
