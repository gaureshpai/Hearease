import React from 'react'
import Link from 'next/link'
import '@/public/styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='heading'>
        <Link  href="/" >HearEase</Link>
      </div>
        <Link href="/download" className='download'>Download App</Link>
    </div>
  )
}

export default Navbar