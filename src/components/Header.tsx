import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='w-full py-5 flex items-center justify-center bg-gray-100 border-b border-gray-200'>
      <Logo />
    </header>

  )
}

export default Header