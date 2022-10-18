import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../wrapper'
import { images } from '../constants'

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      }
    }
  }

  return (
    <div className='flex-center relative flex-1 w-full h-full flex-col pt-12 md:pt-20 xl:flex-row xxl:pt-36 xl:gap-x-6 gap-y-4'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='flex-[0.65] flex flex-col justify-start items-start xl:items-center xl:justify-center h-full mr-0 w-full xxl:w-auto'
      >
        <div className="w-full flex flex-col justify-start items-start xl:justify-end xl:items-end">
          <div className="flex flex-wrap sm:flex-nowrap py-4 px-7 justify-start items-center gap-4 border border-white rounded-[15px] flex-row w-auto shadow-[0_0_20px_rgba(0,0,0,0.1)]">
            <span className='text-3xl sm:text-5xl xxl:text-8xl'>👋</span>
            <div>
              <p className="p-text">Hello, I am</p>
              <h1 className='head-text'>Adewale</h1>
            </div>
          </div>

          <div className="flex-center py-4 px-7 border border-white rounded-[15px] flex-col mt-6 w-auto shadow-[0_0_20px_rgba(0,0,0,0.1)]">
            <p className="p-text w-full uppercase text-right">Web Developer</p>
            <p className="p-text w-full uppercase text-right">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='flex-1 h-full flex justify-end items-end xl:justify-center xl:items-center relative'
      >
        <img 
          src={images.profile} 
          alt="profile_bg"
          className='w-full object-contain z-[1]'
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile-circle"
          className='absolute left-0 right-0 bottom-0 z-0 w-full h-[90%] my-8 xl:my-0'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="flex-[0.75] flex xl:flex-col justify-evenly items-start h-full xl:ml-4 w-full xl:w-auto flex-wrap xl:flex-nowrap"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div
            key={`circle-${index}`}
            className="flex-center my-4 even:my-7 xl:m-4 xl:even:m-7 rounded-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300
              xs:first:w-[50px] xs:first:h-[50px] xs:even:w-[75px] xs:even:h-[75px] xs:last:w-[35px] xs:last:h-[35px] 
              first:w-[75px] first:h-[75px] even:w-[100px] even:h-[100px] last:w-[50px] last:h-[50px] 
              sm:first:w-[100px] sm:first:h-[100px] sm:even:w-[150px] sm:even:h-[150px]  sm:last:w-[70px] sm:last:h-[70px] 
              xxl:first:w-[200px] xxl:first:h-[200px] xxl:even:w-[300px] xxl:even:h-[300px] xxl:last:w-[140px] xxl:last:h-[140px]"
          >
            <img src={circle} alt="circle" className='w-3/5 h-3/5' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap( MotionWrap(Header), 'home', 'app__primarybg bg-cover bg-repeat bg-center' )