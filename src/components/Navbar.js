import React from 'react'
import logo from '../img/logo.svg'


const Navbar = () => {
  return (
      <nav className='flex bg-red w-full justify-center items-center text-white p-4 space-x-1'>
        <img src={logo} alt="" />
      </nav>
  )
}

export default Navbar
