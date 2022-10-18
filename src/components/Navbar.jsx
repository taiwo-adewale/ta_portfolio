import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { images } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='fixed w-full flex min-h-[70px] justify-between items-center xs:px-6 py-4 px-8 xxl:py-8 xxl:px-16 bg-[rgba(255,255,255,0.25)] border border-[rgba(255,255,255,0.18)] backdrop-blur-sm z-[2]'>
      <div className='flex justify-start items-center'>
        <img src={images.logo} alt="logo" className='w-[90px] h-[20px] xxl:w-[180px] xxl:h-[40px]' />
      </div>

      <ul className='app__nav-menu hidden lg:flex flex-1 justify-center items-center list-none'>
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(item => (
          <li className='group flex-center flex-col p-text mx-4 cursor-pointer' key={`link-${item}`}>
            <div className='w-[5px] h-[5px] bg-transparent rounded-full mb-[5px] group-hover:bg-secondary' />
            <a href={`#${item}`} className='text-custGray flex flex-col uppercase font-medium transition-all duration-300 hover:text-secondary'>{item}</a>
          </li>
        ))}
      </ul>

      <div onClick={() => setToggle(true)} className='w-[35px] h-[35px] rounded-full relative flex justify-center items-center bg-secondary cursor-pointer lg:hidden'>
        <HiMenuAlt4 className='w-[70%] h-[70%] text-white' />
      </div>

      {toggle && (
          <motion.div
            animate={{ x: [300, 0] }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='app__offcanvas-menu fixed top-0 bottom-0 right-0 z-[5] p-4 w-[280px] sm:w-[300px] md:w-2/5 h-screen flex flex-col justify-end items-end bg-white bg-cover bg-repeat lg:hidden shadow-[0_0_20px_rgba(168,168,168,0.15)]'
            style={{ backgroundImage: `url(${images.bgWhite})` }}
          >
            <HiX onClick={() => setToggle(false)} className='w-[35px] h-[35px] text-secondary my-2 mx-4 cursor-pointer' />
            <ul className='list-none m-0 p-0 w-full h-full flex flex-col justify-start items-start'>
              {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(item => (
                <li className='m-4' key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)} className='text-custGray uppercase font-medium transition-all duration-300 hover:text-secondary'>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
    </nav>
  )
}

export default Navbar