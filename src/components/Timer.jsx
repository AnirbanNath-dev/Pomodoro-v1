import React, { useContext , useEffect } from 'react'
import PomoContext from '../contexts/PomoContext'

function Timer() {

  const {minute , hour , second ,setSecond  , toggle , setMinute , setHour , setToggle} = useContext(PomoContext)

  useEffect(() => {
    let timer;

    if (toggle && hour >= 0 && minute >= 0 && second >= 0) {
      timer = setInterval(() => {
        setSecond((prevSecond) => {
          if (prevSecond === 0) {
            if (minute > 0) {
              setMinute((prevMin) => prevMin - 1);
              return 59;
            } else {
              if (hour > 0) {
                setHour((prevHour) => prevHour - 1);
                setMinute(59);
                return 59;
              } else {
                
                setToggle(false);
                clearInterval(timer);
                return 0;
              }
            }
          } else {
            return prevSecond - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);

  }, [toggle , hour , minute , second]);



  return (
    <>
      <div className="flex gap-12 text-5xl items-center text-white">
      <span className='overflow-hidden p-2 h-22 w-24 text-center border-gray-800 shadow-sm shadow-gray-800 bg-gray-900 border-2 rounded-lg opacity-90'>{hour}</span>
          :
          <span className='overflow-hidden p-2 h-22 h-22 w-24 text-center border-gray-800 shadow-sm shadow-gray-800 bg-gray-900 border-2 rounded-lg opacity-90'>{minute}</span>
          :
          <span className='overflow-hidden p-2 h-22 h-22 w-24 text-center border-gray-800 shadow-sm shadow-gray-800 bg-gray-900 border-2 rounded-lg opacity-90'>{second}</span>
              </div>

    </>
  )
}

export default Timer
