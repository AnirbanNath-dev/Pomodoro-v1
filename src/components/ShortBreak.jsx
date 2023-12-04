import React, { useState , useEffect} from 'react'
import { motion } from 'framer-motion'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';


function ShortBreak() {

  const [sbMinute , setSbMinute]= useState(10)
  const [sbSecond , setSbSecond]= useState(0)
  const [sbToggle , setSbToggle] = useState(false)


  useEffect(() => {
    let timer;

    if (sbToggle && sbMinute >= 0 && sbSecond >= 0) {
      timer = setInterval(() => {
        setSbSecond((prevSecond) => {
          if (prevSecond === 0) {
            if (sbMinute > 0) {
              setSbMinute((prevMin) => prevMin - 1);
              return 59;
            } else {
 
                setSbToggle(false);
                clearInterval(timer);
                return 0;
              
            }
          } else {
            return prevSecond - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);

  }, [ sbToggle , sbMinute , sbSecond]);


  const restartFunction = () => {

    setSbToggle(false)
    setSbSecond(0)
    setSbMinute(10)

}

  return (

      <motion.div animate={{y:0 , opacity:1}} initial={{y: -70 , opacity:0}} transition={{stiffness:300, type: "spring"}}>
      <div className='bg-[rgba(0,0,0,0.4)] w-fit p-12 rounded-xl flex flex-col items-center gap-16'>

      <div className="flex gap-28 text-5xl items-center text-white">
          
          <span className='overflow-hidden p-2 h-22 h-22 w-24 text-center border-gray-800 shadow-sm shadow-gray-800 bg-gray-900 border-2 rounded-lg opacity-90'>{ sbMinute<10 ? "0"+sbMinute : sbMinute}</span>
          :
          <span className='overflow-hidden p-2 h-22 h-22 w-24 text-center border-gray-800 shadow-sm shadow-gray-800 bg-gray-900 border-2 rounded-lg opacity-90'>{ sbSecond<10 ? "0"+sbSecond : sbSecond }</span>
        </div>


        <div className='flex gap-20 text-2xl items-center'>
          <button className={`bg-gray-900 text-white p-2 rounded-xl active:scale-90 transition-all duration-500 `} onClick={()=> setSbToggle(prev => !prev)}
          >{sbToggle ? <PauseIcon style={{ fontSize: 30 }} /> : <PlayArrowIcon style={{ fontSize: 30 }} />}</button>



          <button className={`bg-gray-900 text-white p-2 rounded-xl  active:scale-90 transition-all duration-500 `} onClick={restartFunction}>{<RestartAltIcon style={{ fontSize: 30 }} />}</button>

        </div>

      </div>
    </motion.div>

  )
}

export default ShortBreak
