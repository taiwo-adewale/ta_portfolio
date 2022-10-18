import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='hidden sm:flex justify-center items-center flex-col p-4'>
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(item => (
        <a
          key={`navigation-${item}`}
          href={`#${item}`}
          className='w-2.5 h-2.5 rounded-full bg-[#cbcbcb] m-2 transition-[background-color] duration-200 ease-in-out hover:bg-secondary xxl:w-5 xxl:h-5'
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  )
}

export default NavigationDots