import React, { useState } from 'react';
import { BrowserRouter as Router,
  Route,
  Link,
  NavLink, 
  Switch} from 'react-router-dom';
import '../../App.css';
import SignUp from './SignUp'
import Axios from "axios";

function SignIn () {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = () => {

    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then(function (res) {
      console.log(res);
      alert(res.data);
      
    });
  };
      return(
        
        <form class="box" action="index.html" >
          <h1>Sign In</h1>
          <input
          type="text" 
          placeholder="Username"
          onChange={(e) => setLoginUsername(e.target.value)}
          
        />
        <br />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setLoginPassword(e.target.value)}
          
        />
        <br />

        <Link to="/profile">
          <button className="buttonSignIn" onClick={login}>Continue</button><br/>
        </Link>

           <Router>
        <Switch>
        <Route path="/register" component={SignUp} />
          <a href='/register' style={{color:'white'}}>
          Don't have account? Create account!
          </a>
          </Switch>
        </Router> 
        </form>
       
      );
    
  
}

export default SignIn;