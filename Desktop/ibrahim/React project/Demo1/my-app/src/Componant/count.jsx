import React,{useState,useEffect} from 'react';
import Intrerval from './interveal';


const Counter = () => {
    
        let [show,setShow] = useState(true);
        let [state,setState] = useState({name:"Ibrahim",age:26,count:3});
        let increment = () =>{
        setState({...state,count:state.count + 1})    
}
useEffect(()=>{
    console.log("iam in useEffect");

    return () =>{
        console.log('we are in clean up function');
    }

},[state.count])    
    return (
        <>
        {show &&<Intrerval/>}
        <button onClick={() => setShow(!show)}>show /hide</button>
        <h1> Name :{state.name}</h1>
        <h1>Count: {state.count}</h1>
        <button onClick={() => increment()}>+1</button>
        </>
     );
}
 
export default Counter;