/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>

    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>My technologies used so far</p>
    <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
    </motion.div>

    <div className='flex flex-row flex-wrap justify-center gap-10 mt-6'>
  {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "")