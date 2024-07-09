import React from 'react'
import Link from 'next/link'
import '@/public/styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='heading'>
        <Link  href="/" >HearEase</Link>
      </div>
      <div className='download'>
        <Link href="/download" className='download'>Download App</Link>
      </div>   
    </div>
  )
}

export default Navbar