import React, { useState } from 'react';
import { BrowserRouter as Router,
  Route,
  Link, 
  Switch,
  useHistory} from 'react-router-dom';
import '../../App.css';
import SignUp from './SignUp'
import Axios from "axios";
import GoogleButton from "react-google-button";

function SignIn () {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const history= useHistory();
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
      history.push('/profile');
    window.location.reload();
    });
    
  };
  const googleAuth = () => {
    window.open("http://localhost:4000/google");
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

        <Link >
          <button className="buttonSignIn" onClick={login} >Continue</button><br/>
        </Link>
        <center>
          <GoogleButton onClick={googleAuth}/>
        </center>
        <br/>
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