import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function SignUp(){
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerMobile, setRegisterMobile] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");


  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
        mobile: registerMobile,
        email: registerEmail,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then(function (res) {
      console.log(res);
      alert(res.data);
    });
  };
      return(
        <form class="box" action="index.html" method="post">
          <h1>Signup</h1>
            <input type="text" 
                   name="" 
                   placeholder="Username" 
                   onChange={(e) => setRegisterUsername(e.target.value)}/>
            <input type="text" 
                   name="" 
                   placeholder="Mobile Number"
                   onChange={(e) => setRegisterMobile(e.target.value)}
            />
            <input type="text" 
                   name="" 
                   placeholder="Email"
                   onChange={(e) => setRegisterEmail(e.target.value)}
                   />
            <input type="password" 
                   name="" 
                   placeholder="Password"
                   onChange={(e) => setRegisterPassword(e.target.value)}
                   />
                   <Link to="/profile">
          <button className="buttonSignIn" onClick={register}>Continue</button><br/>
        </Link>
            
        </form>
      );
    
  
}

export default SignUp;