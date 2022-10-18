import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
// import { urlFor, client } from '../client'

import { AppWrap, MotionWrap } from '../wrapper'
// remember to remove the below import
import { images } from '../constants'

const Testimonial = () => {

  const [brands, setBrands] = useState([
    {_id : 'brand-1', imgUrl: images.nb, name: 'New Balance'},
    {_id : 'brand-2', imgUrl: images.skype, name: 'Skype'},
    {_id : 'brand-3', imgUrl: images.spotify, name: 'Spotify'},
    {_id : 'brand-4', imgUrl: images.bolt, name: 'Bolt'},
  ])
  const [testimonials, setTestimonials] = useState([
    {name: 'Sarah', company: 'Netflix', imgUrl: images.css, feedback: 'Wale is an awesome developer. He is a humble guy and he finishes all tasks ahead of time. He is a role model to his junior colleagues.'},
    {name: 'Michael', company: 'Google', imgUrl: images.html, feedback: 'Good job, would recommend! He is a humble guy and he finishes all tasks ahead of time. He is a role model to his junior colleagues.'},
  ])
  const [currentIndex, setCurrentIndex] = useState(0)

  // useEffect(() => {
  //   const query = '*[_type == "testimonials"]'
  //   const brandsQuery = '*[_type == "brands"]'

  //   client.fetch(query)
  //     .then(data => {
  //       setTestimonials(data)
  //     })

  //   client.fetch(brandssQuery)
  //     .then(data => {
  //       setBrands(data)
  //     })
  // }, [])

  const test = testimonials[currentIndex]

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <h2 className="head-text">What <span>People Say</span> About Me</h2>

      {testimonials.length && (
        <>
          <div className="w-full lg:w-3/5 mt-12 xl:min-h-[320px] gap-y-4 bg-white p-8 rounded-[15px] flex-center shadow-[0_0_30px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out flex-col sm:flex-row">
            {/* <img src={urlFor(test.imgUrl)} alt="testimonials" className="w-[100px] h-[100px] rounded-full object-cover xxl:w-[150px] xxl:h-[150px]" /> */}
            <img src={test.imgUrl} alt="testimonials" className="w-[100px] h-[100px] rounded-full object-cover xxl:w-[150px] xxl:h-[150px]" />
            <div className="flex-1 h-full sm:px-4 md:px-8 text-left flex flex-col justify-around items-start">
              <p className="p-text text-xl leading-8 text-custBlack font-base">
                {test.feedback}
              </p>
              <div>
                <h4 className="bold-text font-semibold text-secondary mt-8">{test.name}</h4>
                <h5 className="p-text text-custGray mt-[5px]">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className='mt-4 flex-center'>
            <div
              className="flex-center cursor-pointer w-[50px] h-[50px] rounded-full bg-white m-4 transition-all duration-300 ease-in-out hover:bg-secondary group"
              onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
            >
              <HiChevronLeft className='w-5 h-5 text-secondary group-hover:text-white' />
            </div>
            <div
              className="flex-center cursor-pointer w-[50px] h-[50px] rounded-full bg-white m-4 transition-all duration-300 ease-in-out hover:bg-secondary group"
              onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
            >
              <HiChevronRight className='w-5 h-5 text-secondary group-hover:text-white' />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonial-brands w-full md:w-4/5 flex-wrap my-8 flex-center'>
        {brands.map(brand => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
            className="xs:w-[120px] xs:m-4 w-[150px] m-6 xxl:w-[210px] xxl:m-8 group"
          >
            <img src={brand.imgUrl} alt={brand.name} className="w-full h-auto object-cover grayscale group-hover:grayscale-0" />
            {/* <img src={urlFor(brand.imgUrl)} alt={brand.name} className="w-full h-auto object-cover grayscale group-hover:grayscale-0" /> */}
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap( MotionWrap(Testimonial), 'testimonials', 'app__primarybg' )