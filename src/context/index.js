import React, {useContext, useState , createContext} from 'react'
import {data} from '../data'

const WordContext = createContext()

export const useWordContext = () =>  useContext(WordContext)

export const WordProvider = ({children}) => {
  const setWord = () => {
    let index = Math.floor(Math.random() * data.length)
    setword({...word, word:data[index]})
  } 
    const [word, setword] = useState({
        word:"",
        setWord
    })
  return (
    <WordContext.Provider value={word}>
        {children}
    </WordContext.Provider>
  )
}
