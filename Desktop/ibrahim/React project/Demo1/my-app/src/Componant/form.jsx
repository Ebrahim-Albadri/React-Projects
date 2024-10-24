import React, { Component } from 'react';



class Sign extends Component {
  state = {
    userName:"",
    Password:""
   } 

   HandelSubmet = (e) => {
    e.preventDefault()
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
    <label htmlFor="userName">Email address</label>
    <input name='userName' onChange={this.Handelchange} type="email" class="form-control" id="userName" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label htmlFor="Password">Password</label>
    <input name='Password' onChange={this.Handelchange} type="password" class="form-control" id="Password" placeholder="Password"/>
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
