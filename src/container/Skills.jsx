import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../wrapper";
import { experiences, skills } from "../data";

const Skills = () => {
  return (
    <>
      <h2 className="head-text">
        My <span>Skills</span> & <span>Experiences</span>
      </h2>

      <div className="w-full mt-12 flex flex-col lg:flex-row lg:w-4/5 items-center lg:items-start">
        <motion.div className="flex flex-1 flex-wrap justify-center items-center lg:justify-start lg:items-start lg:mr-20">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex flex-col m-4 xxl:mx-8 transition-all duration-300 text-center flex-center"
              key={skill.name}
            >
              <div className="flex-center w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded-full bg-primary hover:shadow-[0_0_25px_#fef4f5] xxl:w-[150px] xxl:h-[150px]">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-1/2 h-1/2"
                />
              </div>

              <p className="p-text font-medium mt-2 xxl:mt-4">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex flex-col flex-1 justify-start items-start mt-8 lg:mt-0 w-fit lg:w-full">
          {experiences.map((experience) => (
            <motion.div
              className="w-full flex flex-row justify-start items-start my-4"
              key={`exp-${experience.year}`}
            >
              <div className="mr-4 sm:mr-12">
                <p className="bold-text font-extrabold text-secondary ">
                  {experience.year}
                </p>
              </div>

              <motion.div className="flex-1">
                {experience.works.map((work) => (
                  <motion.div
                    key={work.name}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-start items-start mb-4 cursor-pointer"
                  >
                    <h4 className="bold-text font-medium">{work.name}</h4>
                    <p className="p-text text-custGray mt-[5px]">
                      {work.company}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills), "skills", "app__whitebg");
