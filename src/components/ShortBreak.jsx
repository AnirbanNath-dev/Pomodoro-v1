import React from 'react'
import { motion } from 'framer-motion'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';


function ShortBreak() {
  return (

      <motion.div animate={{y:0 , opacity:1}} initial={{y: -70 , opacity:0}} transition={{stiffness:300, type: "spring"}}>
      <div className='bg-[rgba(0,0,0,0.4)] w-fit p-12 rounded-xl flex flex-col items-center gap-16'>

      <div className="flex gap-12 text-5xl items-center text-white">
          <span className='overflow-hidden p-2 h-22 w-24 text-center border-gray-800 shadow-sm shadow-gray-800 bg-gray-900 border-2 rounded-lg opacity-90'>{0}</span>
          :
          <span className='overflow-hidden p-2 h-22 h-22 w-24 text-center border-gray-800 shadow-sm shadow-gray-800 bg-gray-900 border-2 rounded-lg opacity-90'>{0}</span>
          :
          <span className='overflow-hidden p-2 h-22 h-22 w-24 text-center border-gray-800 shadow-sm shadow-gray-800 bg-gray-900 border-2 rounded-lg opacity-90'>{0}</span>
        </div>


        <div className='flex gap-20 text-2xl items-center'>
          <button className={`bg-gray-900 text-white p-2 rounded-xl active:scale-90 transition-all duration-500 `}
          >{<PlayArrowIcon style={{ fontSize: 30 }} />}</button>



          <button className={`bg-gray-900 text-white p-2 rounded-xl  active:scale-90 transition-all duration-500 `} >{<RestartAltIcon style={{ fontSize: 30 }} />}</button>

        </div>

      </div>
    </motion.div>

  )
}

export default ShortBreak
