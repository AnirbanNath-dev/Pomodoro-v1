import EditIcon from '@mui/icons-material/Edit';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import { useContext } from 'react';

import Timer from './Timer';
import TimerSet from './TimerSet';
import PomoContext from '../contexts/PomoContext';

function WorkSession() {



    const { setHour, setMinute, timer, setTimer, toggle, setToggle, hr, mint, setSecond } = useContext(PomoContext)


    const restartFunction = () => {

        setToggle(false)
        setSecond(0)
        setHour(hr)
        setMinute(mint)

    }



    return (
        <>
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
        </>
    )
}

export default WorkSession
