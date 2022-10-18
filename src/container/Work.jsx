import React, {useState, useEffect} from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
// import { urlFor, client } from '../client'

import { AppWrap, MotionWrap } from '../wrapper'
// remember to remove the below import
import { images } from '../constants'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setworks] = useState([
    {title: 'Modern UI/UX Website', description: 'A beautiful website designed by the awesome Wale', projectLink: 'https://youtube.com', codeLink: 'https://youtube.com', imageUrl: images.about01, tags: ['UI/UX', 'All']},
    {title: 'Modern React Website', description: 'A beautiful website designed by the awesome Wale', projectLink: 'https://youtube.com', codeLink: 'https://youtube.com', imageUrl: images.about03, tags: ['React', 'All']},
    {title: 'Modern Laravel Website', description: 'A beautiful website designed by the awesome Wale', projectLink: 'https://youtube.com', codeLink: 'https://youtube.com', imageUrl: images.about04, tags: ['Laravel', 'All']},
  ])
  const [filterWork, setFilterWork] = useState([
    {title: 'Modern UI/UX Website', description: 'A beautiful website designed by the awesome Wale', projectLink: 'https://youtube.com', codeLink: 'https://youtube.com', imageUrl: images.about01, tags: ['UI/UX', 'All']},
    {title: 'Modern React Website', description: 'A beautiful website designed by the awesome Wale', projectLink: 'https://youtube.com', codeLink: 'https://youtube.com', imageUrl: images.about03, tags: ['React', 'All']},
    {title: 'Modern Laravel Website', description: 'A beautiful website designed by the awesome Wale', projectLink: 'https://youtube.com', codeLink: 'https://youtube.com', imageUrl: images.about04, tags: ['Laravel', 'All']},
  ])

  // useEffect(() => {
  //   const query = '*[_type == "works"]'

  //   client.fetch(query)
  //     .then(data => {
  //       setWorks(data)
  //       setFilterWork(data)
  //     })
  // }, [])
  

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{y: 100, opacity: 0}])

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])

      if(item === 'All') {
        setFilterWork(works)
      } else {
        setFilterWork(works.filter(work => work.tags.includes(item)))
      }
    }, 500);
  }

  return (
    <>
      <h2 className='head-text'>My Creative <span>Portfolio</span></h2>

      <div className='flex-center flex-row flex-wrap mt-16 mb-8'>
        {['Web App', 'Tailwind', 'React', 'Laravel', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`py-2 px-4 rounded-lg bg-white font-extrabold cursor-pointer transition-all duration-300 ease-in m-2 text-black flex-center p-text hover:bg-secondary hover:text-white xxl:py-4 xxl:px-8 xxl:rounded-[0.85rem] ${activeFilter === item ? '!bg-secondary !text-white' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex-center flex-wrap"
      >
        {filterWork.map((work,index) => (
          <div className="xs:w-full xs:mx-0 w-[270px] flex-col m-8 p-4 rounded-lg flex-center bg-white text-black cursor-pointer transition-all duration-300 ease-in hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] xxl:w-[470px] xxl:p-5 xxl:rounded-xl" key={index}>
            <div className="w-full h-[230px] relative flex-center xxl:h-[350px]">
              {/* <img src={urlFor(work.imgUrl)} alt={work.title} className="w-full h-full rounded-lg object-cover" /> */}
              <img src={work.imageUrl} alt={work.title} className="w-full h-full rounded-lg object-cover" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex-center rounded-lg opacity-0"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="flex-center w-[50px] h-[50px] rounded-full bg-[rgba(0,0,0,0.5)] text-white m-4 font-base font-extrabold cursor-pointer border border-transparent transition-all"
                  >
                    <AiFillEye className='w-1/2 h-1/2 text-white' />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="flex-center w-[50px] h-[50px] rounded-full bg-[rgba(0,0,0,0.5)] text-white m-4 font-base font-extrabold cursor-pointer border border-transparent transition-all"
                  >
                    <AiFillGithub className='w-1/2 h-1/2 text-white' />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='p-2 w-full relative flex-col flex-center'>
              <h4 className="bold-text mt-4 leading-[1.5] self-start">{work.title}</h4>
              <p className="p-text mt-2.5">{work.description}</p>

              <div className="absolute py-2 px-4 rounded-[10px] bg-white -top-[25px] flex-center">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap( MotionWrap(Work), 'work', 'app__primarybg' )