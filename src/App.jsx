
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { useContext, useState } from 'react';
import WorkSession from './components/WorkSession';
import ShortBreak from './components/ShortBreak';
import LongBreak from './components/LongBreak';
import PomoContext from './contexts/PomoContext';
import { motion } from 'framer-motion';


function App() {
  const [pomoScreen, setPomoScreen] = useState('work-session')
  const [isFullScreen, setFullScreen] = useState(false)
  const {setToggle} = useContext(PomoContext)

  const fullScreen = () => {
    setFullScreen(prev => !prev)


    if (document.fullscreenElement) {

      document.exitFullscreen();
    } else {

      document.documentElement.requestFullscreen();
    }



  }

  return (
    <>

      <div className='w-screen h-screen bg-[url(../../bg.png)] bg-cover bg-center text-white overflow-x-hidden'>
        {
          isFullScreen ? <FullscreenExitIcon className='absolute text-black bottom-4 right-4 text-2xl scale-125 hover:scale-150 cursor-pointer' onClick={fullScreen}></FullscreenExitIcon> : <FullscreenIcon className='absolute text-black bottom-4 right-4 text-2xl scale-125 hover:scale-150 cursor-pointer' onClick={fullScreen}></FullscreenIcon>
        }
        <div className='w-[85%] mx-auto h-[100%] p-20 font-LondonBetween flex flex-col items-center gap-14'>
          <motion.h1 className='text-6xl tracking-widest font-CoffeeHealing' animate={{opacity:1}} initial={{opacity:0}} transition={{duration: 1}}>Pomodoro Timer</motion.h1>
          <div className='flex items-center flex-col gap-2'>

            <motion.div className='flex gap-4 text-lg ' animate={{opacity:1}} initial={{opacity:0}} transition={{duration: 1}}>

              <span className={` p-2 shadow-sm shadow-gray-800  border-2 rounded-3xl text-center cursor-pointer ${pomoScreen == 'work-session' ? 'bg-gray-900 text-slate-400 border-gray-800':'text-slate-300 border-gray-500'}`} onClick={()=> {
                setToggle(false)
                setPomoScreen('work-session')
                }}>Work Session🎯</span>

              <span className={` p-2 shadow-sm shadow-gray-800  border-2 rounded-3xl text-center cursor-pointer ${pomoScreen == 'short-break' ? 'bg-gray-900 text-slate-400 border-gray-800':'text-slate-300 border-gray-500'}`} onClick={()=> {
                setToggle(false)
                setPomoScreen('short-break')
                }}>Short Break🍙</span>

              <span className={` p-2 shadow-sm shadow-gray-800  border-2 rounded-3xl text-center cursor-pointer ${pomoScreen == 'long-break' ? 'bg-gray-900 text-slate-400 border-gray-800':'text-slate-300 border-gray-500'}`} onClick={()=> {
                setToggle(false)
                setPomoScreen('long-break')
                }}>Long Break🍙</span>

            </motion.div>

            {

              pomoScreen == 'work-session' ? <WorkSession /> : null
            }
            {
              pomoScreen == 'short-break' ? <ShortBreak/> : null

            }
            {
              pomoScreen == 'long-break' ? <LongBreak/> : null
            }

          </div>
        </div>
      </div>

    </>
  )
}

export default App
