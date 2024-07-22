import React, { Component } from 'react';
import ShopingCard from './ShopingCard';
import Navbar from './navbar';

class App extends Component {
    
    state = { 
        Products:[
             {id:1,name:"Porger",count:3}
            ,{id:2,name:"Frize",count:0}
            ,{id:3,name:"Purger",count:3}
        ]
     } 

     updateCount= (Product) => {
        // clone  
        let Products = [...this.state.Products]
        let index = Products.indexOf(Product)
        //this coalled deep cloneing
        Products[index] = {...this.state.Products[index]};
        //edit
        Products[index].count++;
        //setstate
        this.setState({Products})
      }
     handelReset = () =>{
        //clone
        let Products = [...this.state.Products]
        // edite
        Products = Products.filter(p => { 
            p.count = 0 ;
            return p;
        })
        this.setState({Products})
     }

     handelDelete = product => {
           //clone 
           
           //edate
           let Products = this.state.Products.filter( p => p.id !== product.id)
           //setstate
           this.setState({Products})
     }
    
      
    render() { 
        return (
            <React.Fragment>
                    <Navbar ProductsCount ={this.state.Products.filter(p=> p.count >0).length} />
                    <main className="container">
                        <ShopingCard 
                        Products = {this.state.Products}
                        incrementCount = {this.updateCount}
                        onDelete = {this.handelDelete}
                        onReset ={this.handelReset}
                        />
                    </main>                    
                </React.Fragment>
        );
    }
}
 
export default App;

