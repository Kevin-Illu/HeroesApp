import React from 'react'
import { HeroList } from '../hero/HeroList'
import { motion } from 'framer-motion';
export const DcScreen = () => {
  return (
    <>
      <motion.div>
        <motion.h1
          className="text-2xl   lg:text-9xl py-4 mb-4 text-center font-bold"
          initial={{ y: -180, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .2 }}
        >
          DC Comics
        </motion.h1>
        <HeroList publisher="DC Comics" />
      </motion.div>

    </>
  )
}
