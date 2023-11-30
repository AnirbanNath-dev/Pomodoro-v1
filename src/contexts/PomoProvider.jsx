import React, { useState } from 'react'
import PomoContext from './PomoContext'

function PomoProvider({children}) {

    const [hour , setHour]= useState(0)
    const [minute , setMinute]= useState(25)
    const [second , setSecond] = useState(0)
    const [timer , setTimer] = useState(0)
    const [toggle, setToggle] = useState(false)
    const [hr, setHr] = useState(0)
    const [mint, setMint] = useState(25)
    

  return (
    <PomoContext.Provider value={{hour , setHour , minute , setMinute , timer , setTimer , toggle , setToggle , second , setSecond , hr , setHr , mint , setMint}}>
        {children}
    </PomoContext.Provider>
  )
}

export default PomoProvider
