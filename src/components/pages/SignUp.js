import React from 'react';
import '../../App.css';

const SignUp = () => {
      return(
        <form class="box" action="index.html" method="post">
          <h1>Signup</h1>
            <input type="text" name="" placeholder="Name"/>
            <input type="text" name="" placeholder="Username"/>
            <input type="text" name="" placeholder="Email"/>
            <input type="password" name="" placeholder="Password"/>
            <input type="submit" name="" value="Signup"/>
        </form>
      );
    
  
}

export default SignUp;