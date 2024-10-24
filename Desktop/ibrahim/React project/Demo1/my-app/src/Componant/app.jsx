import React,{useState} from 'react';
import ShopingCard from './ShopingCard';
import Navbar from './navbar';
import Intrerval from './interveal';
 
const App = () => {
    
    let [state,setState] = useState({Products:[
        {id:1,name:"Porger",count:3}
       ,{id:2,name:"Frize",count:0}
       ,{id:3,name:"Purger",count:3}
   ]})

   
    let updateCount= (Product) => {
    // clone  
    let Products = [...state.Products]
    let index = Products.indexOf(Product)
    //this coalled deep cloneing
    Products[index] = {...state.Products[index]};
    //edit
    Products[index].count++;
    //setstate
    setState({...state,Products:state.Products})
  }
     let handelReset = () =>{
    //clone
    let Products = [...state.Products]
    // edite
    Products = Products.filter(p => { 
        p.count = 0 ;
        return p;
    })
    setState({...state,Products:state.Products})
 }

 let handelDelete = product => {
       //clone 
       
       //edate
       let Products = state.Products.filter( p => p.id !== product.id)
       //setstate
       setState({...state,Products:state.Products})
 }


    return ( 
        <>
        <Navbar ProductsCount ={state.Products.filter(p=> p.count >0).length} />
                    <main className="container">
                        
                        <ShopingCard 
                        Products = {state.Products}
                        incrementCount = {updateCount}
                        onDelete = {handelDelete}
                        onReset ={handelReset}
                        />
                    </main>
        </>
     );
}
 
export default App;