import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../wrapper";
import { images } from "../constants";

const About = () => {
  const abouts = [
    {
      title: "Web Development",
      description: "I am a good web developer,",
      imgUrl: images.about01,
    },
    {
      title: "Web Design",
      description: "I am a good web designer,",
      imgUrl: images.about02,
    },
    {
      title: "Web Animations",
      description: "I am a good web designer,",
      imgUrl: images.about03,
    },
    {
      title: "UI/UX",
      description: "I am a good web developer,",
      imgUrl: images.about04,
    },
  ];

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Design</span> <br /> means{" "}
        <span>Good Business</span>
      </h2>

      <div className="flex justify-center items-start flex-wrap mt-8">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="w-[190px] flex flex-col justify-start items-start m-8 xxl:w-[370px] xxl:my-8 xxl:mx-16"
            key={about.title + index}
          >
            <img
              src={about.imgUrl}
              alt={about.title}
              className="w-full h-[170px] rounded-[15px] object-cover xxl:h-[320px]"
            />
            <h2 className="bold-text mt-5">{about.title}</h2>
            <p className="p-text mt-2.5">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About), "about", "app__whitebg");
