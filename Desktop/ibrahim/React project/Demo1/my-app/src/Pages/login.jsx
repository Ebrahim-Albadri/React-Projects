import React from 'react';
import Counter from '../Componant/counter';


const Login = () => {
    const email = React.createRef();
    let Handelsubmet = (e)=> {
        e.preventDefault()    
        const y = email.current.value;
        console.log("submeted")
    }
    return ( 
        <>
        <h1>Login</h1>
        <form onSubmit={Handelsubmet}>
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input ref={email} type="email" className="form-control" id="email"/>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd"/>
  </div>
  <div className="checkbox">
    {/* <label><input type="checkbox"/> Remember me</label> */}
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  <Counter/>
        </>
     );
}
 
export default Login;