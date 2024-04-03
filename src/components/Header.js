import React from 'react'
import logo from '../assets/logo3.png'
const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-white  z-10'>
        <img className='h-20 '
         src={logo} alt="logo" />

    </div>
  )
}

export default Header