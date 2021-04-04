import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, useHistory } from 'react-router-dom';
import './pages/style/Navbar.css';
import axios from 'axios';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [status, setStatus] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const history =useHistory();
  const closeMobileMenuLogout = () => {
    
    axios({
      method: "GET",
      withCredentials: true ,
      url: "http://localhost:4000/logout",
    }).then((res) =>{
      console.log('res', res);
      alert("You are logged out!");
      setStatus(false);
      history.push('/');
    window.location.reload();
    });
    setClick(false);
    
  }
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  
  axios({
    method: "GET", 
    withCredentials: true,
    url: "http://localhost:4000/userstatus",
  }).then((res) => {
    if(res.data){
      setStatus(true);
    }
  })
 
  
  window.addEventListener('resize', showButton);

  return (
    <>
    {status ?
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/explore'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to='/products'
                className='nav-links-mobile'
                onClick={closeMobileMenuLogout}
              >
                Log Out
              </Link>
            </li>
            
            </ul>
            </div>
            </nav>
    </>
            :
        <>
            <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <Link
                to='/register'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>
            
            {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
          </ul>
          
        </div>
      </nav>
    </>
    }
     </>
  );
 
}

export default Navbar;
