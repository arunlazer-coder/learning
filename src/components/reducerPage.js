import React,{useReducer, useRef} from 'react'
import { ACTION_REDUCER, REDUCER_INITIAL_STATE } from '../constants'
import { reducer } from '../reducer'
import {data} from '../data'

export const BgReducer = () => {
  const [state, dispatch] = useReducer(reducer, REDUCER_INITIAL_STATE)
  const cardRef = useRef()

  const setWord = () => {
    seColor()
    let index = Math.floor(Math.random() * data.length)
    dispatch({type:ACTION_REDUCER.TEXT_CHANGE, payload:data[index]})
  } 
  const seColor = () => {
    let data = ['red', 'green', 'yellow', 'blue', 'pink', 'brown']
    let index = Math.floor(Math.random() * data.length)
    cardRef.current.style.backgroundColor=data[index]
    dispatch({type:ACTION_REDUCER.COLOR_CHANGE, payload:data[index]})
  } 
 
  return (
    <div  className='app d-flex flex-column'>
    <h1 className='bg-white col-1'>{state.color}</h1>
    <div className='card'  ref={cardRef}>  
        <h1 className='heading'>{state.text}</h1>
        <button className='button' onClick={setWord}> 
            <span>
                Click
            </span>
        </button>
    </div>
</div>
  )
}
