import React from 'react'
import { motion } from 'framer-motion'

function ShortBreak() {
  return (

      <motion.div animate={{y:0 , opacity:1}} initial={{y: -70 , opacity:0}} transition={{stiffness:300, type: "spring"}}>
      <div className='bg-[rgba(0,0,0,0.4)] w-fit p-12 rounded-xl flex flex-col items-center gap-10'>

        Will be updated soon 
        
          Will be updated soon


      </div>
    </motion.div>

  )
}

export default ShortBreak
