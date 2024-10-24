
import React,{useEffect, useState} from "react";
// import { useEffect } from "react";
const Counter = () => {
const [state, setstate] =useState({name:"ibrahim" , age:26, count:0});
const [state1,setstate1]=useState(0)

useEffect(() =>{
console.log("useeffect")
    },[state1])
console.log("reander Consol");

return (
    <>
        <h1>{state.count}</h1>
        <button onClick={() => setstate({...state,count:state.count +1})}>+1</button>
        <h1>{state1}</h1>
        <button onClick={ () => setstate1(state1 + 2)}>+2</button>
    </>
)
}

export default Counter ;