import React, {useState} from 'react'

import { images } from '../constants'
import { AppWrap, MotionWrap } from '../wrapper'
// import { client } from '../client'

const Footer = () => {

  const [formData, setFormData] = useState({
    name: '', email: '', message: ''
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData


  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
  }

  return (
    <>
      <h2 className="head-text">Take A Coffee & Chat With Me</h2>

      <div className="flex justify-evenly items-center flex-wrap mx-8 mt-16 mb-8 w-full md:w-3/5">
        <div className="min-w-[290px] flex flex-row justify-start items-center my-4 p-4 rounded-[10px] cursor-pointer bg-[#fef4f5] transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_#fef4f5] w-full sm:w-auto">
          <img src={images.email} alt="email" className='w-10 h-10 mx-[0.7rem]' />

          <a href="mailto:adewaletaiwo08@gmail.com" className='p-text font-medium'>adewaletaiwo08@gmail.com</a>
        </div>

        <div className="min-w-[290px] flex flex-row justify-start items-center my-4 p-4 rounded-[10px] cursor-pointer bg-[#f2f7fb] transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_#fef4f5] w-full sm:w-auto">
          <img src={images.mobile} alt="mobile" className='w-10 h-10 mx-[0.7rem]' />

          <a href="tel: +2348106529259" className='p-text font-medium'>+2348106529259</a>
        </div>
      </div>

      {!isFormSubmitted ? 
        <div className="w-full md:w-3/5 flex-col my-4 md:mx-8 flex-center">
          <div className="flex-center w-full my-3 rounded-[10px] cursor-pointer bg-primary transition-all duration-300 ease-in-out">
            <input className='p-text w-full p-[0.95rem] border-none rounded-[7px] bg-primary font-base text-secondary outline-none hover:shadow-[0_0_25px_#edf2f8]' type="text" name="name" placeholder='Your Name' value={name} onChange={handleChangeInput} />
          </div>
          <div className='flex-center w-full my-3 rounded-[10px] cursor-pointer bg-primary transition-all duration-300 ease-in-out'>
            <input className='p-text w-full p-[0.95rem] border-none rounded-[7px] bg-primary font-base text-secondary outline-none hover:shadow-[0_0_25px_#edf2f8]' type="email" name="email" placeholder='Your Email' value={email} onChange={handleChangeInput} />
          </div>
          <div className='w-full my-3 rounded-[10px] cursor-pointer bg-primary transition-all duration-300 ease-in-out'>
            <textarea
              className='p-text w-full p-[0.95rem] border-none rounded-[7px] bg-primary font-base text-secondary outline-none hover:shadow-[0_0_25px_#edf2f8] h-[170px]'
              placeholder='Your Message'
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text px-8 py-4 border-none rounded-[10px] bg-secondary font-medium !text-white font-base cursor-pointer mt-8 outline-none' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>
        :
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      }
    </>
  )
}

export default AppWrap( MotionWrap(Footer), 'contact', 'app__whitebg' )