import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './pages/style/HeroSection.css';
import ModalVideo from './VideoModal'
function HeroSection() {
  // const history =useHistory();
  // const onClickExplore= history.push('/explore')
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      <Link to='/explore'>
        <button
          style={{
            margin:'6px',
            padding: '12px 26px',
            fontSize: '20px',
            background: 'white',
            border: 'none',
            borderRadius: '2px'
          }}
        >
          GET STARTED
        </button></Link> 
        <a href="https://www.youtube.com/watch?v=eH2WNtL5ong">
        <button
          style={{
            margin:'6px',
            padding: '12px 26px',
            fontSize: '20px',
            background: 'white',
            border: 'none',
            borderRadius: '2px'
          }}
          
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </button></a>
      </div>
    </div>
  );
}

export default HeroSection;
