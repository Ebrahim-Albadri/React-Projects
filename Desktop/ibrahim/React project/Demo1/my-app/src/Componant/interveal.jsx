import React,{useEffect} from "react";


const Intrerval = () => {
    useEffect(() =>{
        console.log('useeffect-in');
         let interv= setInterval(() =>{
            console.log('intervel');
        },1000)
        return () =>{
            clearInterval(interv);
        }
    
    },[])
    return ( <h1>Intervel</h1>);
}
 
export default Intrerval;
