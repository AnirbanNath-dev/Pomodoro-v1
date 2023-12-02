import React, { useContext } from 'react'
import PomoContext from '../contexts/PomoContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function TimerSet() {

  
  const { setHour, setMinute, setTimer ,  hr , setHr , mint , setMint} = useContext(PomoContext)
  
  


  const handleClick = () => {

    if(String(hr).split('').every((elem)=> elem === '0')){

       setHour(0)
       setHr(0)

    }
    else{
      setHour(hr)
      setHr(hr)
    }

   

    if((String(mint).split('').every((elem)=> elem === '0'))){

      setMinute(0)
      setMint(0)

    }else{
      setMinute(() => {
        if (mint / 60 == 0) {
          setMint(mint)
          return mint
        } else {
  
          let quotient = mint / 60
          let remainder = mint % 60
          setHour(Number(hr) + Math.floor(quotient))
          setHr(Number(hr) + Math.floor(quotient))
          setMint(remainder)
          return remainder
  
        }
      })

      
  
    }

   
     

    setTimer((prev) => !prev)
  

  }


  return (

    <>
      <ToastContainer className='text-xl' position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover={false}
        theme="light"
      />

      <div className={`h-1/2 absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.4)] z-50 backdrop-blur-md rounded-xl flex flex-col text-2xl p-6 justify-around items-center `}>

        <div className='flex gap-12'>

          <div className='flex flex-col items-center gap-4 '>
            <label htmlFor="" className='p-[2px] border-b-2 rounded-md border-yellow-300'>Hour</label>
            <input
              placeholder='hour'
              type="number"
              className='text-cyan-200 outline-none rounded-lg bg-transparent border-2 border-slate-500 bg-slate-800 p-2'
              min={0}
              onChange={(e) => setHr(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === '-' || e.key === 'e' || e.key === '.' || e.key === 'E') {
                  toast('Invalid input')
                  e.preventDefault()
                  setHr('')

                }
              }}
              value={hr}
            />
          </div>
          <div className='flex flex-col items-center gap-4'>
            <label htmlFor="" className='p-[2px] border-b-2 rounded-md border-yellow-300'>Minute</label>
            <input
              placeholder='minute'
              type="number"
              className='text-cyan-200 outline-none rounded-lg bg-transparent border-2 border-slate-500 bg-slate-800 p-2'
              min={0}
              onChange={(e) => setMint(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === '-' || e.key === 'e' || e.key === '.' || e.key === 'E') {
                  toast('Invalid input')
                  e.preventDefault()
                  setMint('')

                }
              }}
              value={mint}
            />
          </div>



        </div>

        <button
          className='border-2 p-2 text-cyan-200 border-gray-800 shadow-sm shadow-gray-800 bg-gray-900 rounded-lg opacity-90 w-fit'
          onClick={handleClick}
        >Set Timer</button>


      </div>

    </>
  )
}

export default TimerSet
