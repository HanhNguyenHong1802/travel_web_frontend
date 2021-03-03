import React, { Component } from 'react';
import Navbar from './Navbar';
import '../App.css';
import Home from './pages/Home';
import {  Switch, Route,withRouter } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { login, signup} from '../redux/ActionCreators';
import { render } from '@testing-library/react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      feedbacks: state.feedbacks,
      user: state.user,
      users: state.users
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user))
});
class Main extends Component{
componentDidMount() {
        this.props.getComments();
        this.props.getUsers();
    }
render() {
  return (
    <>
      
        <Navbar login = {this.props.login}
	            user = {this.props.user}
	            signup = {this.props.signup}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/register' component={SignUp} />
          <Route path='/login' component={SignIn} />
        </Switch>
      
    </>
  );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
