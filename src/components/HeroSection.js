import React from 'react';
import { Link, useHistory, useState } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './pages/style/HeroSection.css';
//import ModalVideo from './VideoModal'
import SearchField from "react-search-field";
import axios from 'axios';
function HeroSection() {
  //const [hotel,setHotel]=useState([])
  // const history =useHistory();
  // const onClickExplore= history.push('/explore')
  const handleSearch =()=>{
    axios({
      method: "POST",
      withCredentials: true ,
      url: "http://localhost:4000/hotelsearch",
    }).then((res) =>{
      console.log('res', res);
    });
  }
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Link to='/explore'>
          <button
            style={{
              margin: '6px',
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
              margin: '6px',
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
      <SearchField
        placeholder="Search..."
        onChange={handleSearch}
        searchText="This is initial search text"
        classNames="test-class"
      />
    </div>
  );
}

export default HeroSection;
