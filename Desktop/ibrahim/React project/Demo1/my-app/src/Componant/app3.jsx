import React, { Component } from 'react';
import ShopingCard from './ShopingCard';
import Navbar from './navbar';
import Intrerval from './interveal';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../Pages/home';
import AboutUs from '../Pages/about us';
import RootLayout from './../RootLayout/mainRoot';
import Product from './product';
import Error from '../Pages/error';
import DashbordLayout from '../RootLayout/dashbordLayout';
import HomeDashbord from '../Pages/homeDashbord';
import Posts from '../Pages/posts';
import Users from '../Pages/users';
import Login from '../Pages/login';
import Sign from './form';

class App extends Component {
    
    state = { 
        Products:[
             {id:1,name:"Porger",count:3}
            ,{id:2,name:"Frize",count:0}
            ,{id:3,name:"Purger",count:3}
        ],
        show:true
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
      router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element ={<RootLayout/>}>
                    <Route index element ={<Home />} />
                    <Route path='home' element ={<Home />} />
                    <Route path='About us' element={<AboutUs />} />
                    <Route path='shoping card' element ={<ShopingCard/>}/>
                    <Route path='products' element ={<Product/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='sign' element={<Sign/>} />
                    <Route path='*' element ={<Error/>}/>
                    <Route path="dashbord" element={<DashbordLayout/>}>
                           <Route index element={<HomeDashbord/>}/>
                           <Route path= "posts" element={<Posts/>}/>
                           <Route path= "users" element ={<Users/>}/>                 
                    </Route>
            </Route>
        )
    );
     
    render() {
        return ( 
            <RouterProvider router={this.router} />
    
         );
    }
}
 
export default App;




// <Navbar ProductsCount ={this.state.Products.filter(p=> p.count >0).length} />
// <main className="container">
//     <ShopingCard 
//     Products = {this.state.Products}
//     incrementCount = {this.updateCount}
//     onDelete = {this.handelDelete}
//     onReset ={this.handelReset}
//     />
// </main> 

