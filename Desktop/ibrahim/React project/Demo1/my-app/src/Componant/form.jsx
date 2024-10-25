import React, { Component } from 'react';
import Joi from 'joi';



class Sign extends Component {
  state = {
    username:"",
    password:"",
    errors:{}
   } 

    schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().min(8).required()
  });
   
   valedate = () =>{
    const state = this.state;
    delete state.errors
    const res = this.schema.validate(this.state, { abortEarly: false });
    console.log(res)    
    return res;
    }

   HandelSubmet = (e) => {
   e.preventDefault()
   
    const errors = this.valedate();
   if(errors) {
    return;   
   };
    
    console.log("submit");
   }

   Handelchange = (e) => {
        //clon
        let state = {...this.state}
        //edit
        state[e.currentTarget.name] = e.currentTarget.value;
        //setstate
        this.setState(state)
        
   }
  render() { 
    return (
                <React.Fragment>
<form onSubmit={this.HandelSubmet}>
  <div class="form-group">
    <label htmlFor="username">Email address</label>
    <input name='username' onChange={this.Handelchange} type="email" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label htmlFor="password">password</label>
    <input name='password' onChange={this.Handelchange} type="password" class="form-control" id="password" placeholder="password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </React.Fragment>

    );
  }
}
 
export default Sign;
