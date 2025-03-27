import React from 'react'
import Link from "next/link"
const Navbar = () => {
  return (
    <header className='text-white'>
        <nav className='w-full py-5 px-2 flex justify-between items-center bg-[#13131307]'>
            <h1 className='text-2xl font-bold'>Title</h1>
            <div id='links' className='w-1/2 flex justify-around px-10'>
                
                    <Link href={'/'} className="text-lg inline-block font-semibold hover:text-[#FFB800]">Home</Link>
                    <Link href={'/about'} className="text-lg inline-block font-semibold hover:text-[#FFB800]">About</Link>
                    <Link href={'/timepass'} className="text-lg inline-block font-semibold hover:text-[#FFB800]">Timepass</Link>
                
            </div>
        </nav>
    </header>
  )
}

export default Navbar