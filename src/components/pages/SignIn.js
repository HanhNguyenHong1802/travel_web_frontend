import React from 'react';
import { BrowserRouter as Router,
  Route,
  Link,
  NavLink, 
  Switch} from 'react-router-dom';
import '../../App.css';
import SignUp from './SignUp'
const SignIn = () => {
      return(
        <>
        <form class="box" action="index.html" method="post">
          <h1>Login</h1>
            <input type="text" name="" placeholder="Username"/>
            <input type="password" name="" placeholder="Password"/>
            <input type="submit" name="" value="Signin"/>
           <Router>
        <Switch>
        <Route path="/sign-up" component={SignUp} />
          <a href='/sign-up' style={{color:'white'}}>
          Don't have account? Create account!
          </a>
            
          
          </Switch>
        </Router> 
        </form>
        
        </>
      );
    
  
}

export default SignIn;