import React, { useState, useEffect } from "react";
import Widget from "../widget";

const Counter = () => {
const [form, setForm] = useState(false)
const [text, setText] = useState("initial")
// to reproduce the rendering issue

const onCounterChange =() => {
    setText(text)
}
const onChange = () => {
    
}
const formLoad =() =>{
    setForm(<Widget 
        onCounterChange={onCounterChange}
        children={
            // <input type="text" onChange={(e) =>{
            //     setText(e.target.value)
            // }}/>
            <input type="text" onChange={(e) =>{
                onChange(e)
            }}/>
        }
        />)
}
return (
	<div>
		{text}
    <button onClick={formLoad}>
        load widget
    </button>
    {form}
	</div>
)
}

export default Counter
