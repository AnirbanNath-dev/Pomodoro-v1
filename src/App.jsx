import EditIcon from '@mui/icons-material/Edit';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { useContext, useState } from 'react';
import Timer from './components/Timer';
import TimerSet from './components/TimerSet';

import PomoContext from './contexts/PomoContext';


function App() {

  const [isFullScreen, setFullScreen] = useState(false)

  const { setHour, setMinute, timer, setTimer, toggle, setToggle, hr, mint, setSecond } = useContext(PomoContext)


  const restartFunction = () => {

    setToggle(false)
    setSecond(0)
    setHour(hr)
    setMinute(mint)

  }

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

              <span className='text-slate-400 p-2 border-gray-800 shadow-sm shadow-gray-800 bg-gray-900 border-2 rounded-3xl text-center cursor-pointer'>Work Session🎯</span>
              <span className='text-slate-400 p-2 border-gray-800 shadow-sm shadow-gray-800 bg-gray-900 border-2 rounded-3xl text-center cursor-pointer'>Short Break🍙</span>
              <span className='text-slate-400 p-2 border-gray-800 shadow-sm shadow-gray-800 bg-gray-900 border-2 rounded-3xl text-center cursor-pointer'>Long Break🍙</span>

            </div>

            <div className='bg-[rgba(0,0,0,0.4)] w-fit p-12 rounded-xl flex flex-col items-center gap-10'>

              <div className='flex gap-10 text-6xl items-center'>

                {
                  timer ? <TimerSet></TimerSet> : null

                }


                <Timer></Timer>


              </div>




              <div className='flex gap-12 text-2xl items-center'>
                <button className={`bg-gray-900 text-white p-2 rounded-xl active:scale-90 transition-all duration-500 $`} onClick={() => setToggle(prev => !prev)
                }>{toggle ? <PauseIcon style={{ fontSize: 30 }} /> : <PlayArrowIcon style={{ fontSize: 30 }} />}</button>

                <button className={'bg-gray-900 text-white p-2 rounded-xl hover:opacity-70 active:scale-90 transition-all duration-500 '} onClick={() => setTimer(prev => !prev)}>{<EditIcon style={{ fontSize: 30 }} />}</button>

                <button className={`bg-gray-900 text-white p-2 rounded-xl  active:scale-90 transition-all duration-500 `} onClick={restartFunction}>{<RestartAltIcon style={{ fontSize: 30 }} />}</button>

              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
