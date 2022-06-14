import React, {useEffect, useState, useRef} from 'react'

export const Effect = () => {
  //useState will return an array ["", a function]
  /*
  Everytime we call settext(somthing) that always create a new function call Effect() with useState("")
  At first time Effect will get called then usestate will return ["", a function] 
   when the state change 
        2nd time effect will get called with settext("a") then usestate will return ["a", a function]
        3rd time effect will get called with settext("b") then usestate will return ["b", a function]
  for everytime this will get called evertime and evrytime new data gets created
  */ 
  const [text, settext] = useState("")


  //useref won't re-render the component and by using this u can change element events and change properties
  //this will return a {current:element } useref holds the element not the value  
  const textRef = useRef()

  const changeText =(a) => {
    settext(a)
    if(!textRef.current.className.includes("rounded")){
      textRef.current.className = textRef.current.className + " border border-dark rounded"
    }
  }
  useEffect(() => {
    
    return () => {
      // console.log(text);
    }
  })
  
  return (
    <div ref={textRef} className='text-danger'>
      <input  type='text' onChange={(e) => changeText(e.target.value)} />
      <h1>{text}</h1>
    </div>
  )
}
