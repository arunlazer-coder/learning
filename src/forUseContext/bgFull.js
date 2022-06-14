import React from 'react'
import { useWordContext } from '../context'
export const BgFull = () => {
  const {word, setWord} = useWordContext()
  return (
    <div  className='app'>
    <div className='card'>  
        <h1 className='heading'>{word}</h1>
        <button className='button' onClick={setWord}> 
            <span>
                Click
            </span>
        </button>
    </div>
</div>
  )
}
