import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hotel from './components/pages/Hotel';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Profile from './components/pages/Profile';
import Explore from './components/pages/Explore';
import Products from './components/pages/Products';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/hotel/' component={Hotel} />
          <Route path='/explore' component={Explore} />
          <Route path='/register' component={SignUp} />
          <Route path='/login' component={SignIn} />
          <Route path='/profile' component={Profile}/>
          <Route path='/products' component={Products}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
