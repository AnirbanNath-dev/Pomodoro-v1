
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { useState } from 'react';
import WorkSession from './components/WorkSession';
import ShortBreak from './components/ShortBreak';
import LongBreak from './components/LongBreak';


function App() {
  const [pomoScreen, setPomoScreen] = useState('work-session')
  const [isFullScreen, setFullScreen] = useState(false)
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
          <h1 className='text-6xl tracking-wider '>Pomodoro Timer</h1>
          <div className='flex items-center flex-col gap-2'>

            <div className='flex gap-4 text-lg '>

              <span className='text-slate-400 p-2 border-gray-800 shadow-sm shadow-gray-800 bg-gray-900 border-2 rounded-3xl text-center cursor-pointer' onClick={()=> setPomoScreen('work-session')}>Work Session🎯</span>
              <span className='text-slate-400 p-2 border-gray-800 shadow-sm shadow-gray-800 bg-gray-900 border-2 rounded-3xl text-center cursor-pointer' onClick={()=> setPomoScreen('short-break')}>Short Break🍙</span>
              <span className='text-slate-400 p-2 border-gray-800 shadow-sm shadow-gray-800 bg-gray-900 border-2 rounded-3xl text-center cursor-pointer' onClick={()=> setPomoScreen('long-break')}>Long Break🍙</span>

            </div>

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
