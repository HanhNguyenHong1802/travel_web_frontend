import React, { Component } from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import "../../styles/home.css"
import {Link} from 'react-router-dom'
import Axios from "axios";
import Typewriter from 'typewriter-effect';
import NavbarComp from "../component/navbar"
import CarouselComp from "../component/carousel";
import HotelCardComp from "../component/hotelcards";
import Worldmap from "../component/worldmap";


class Home extends Component {

  state = {
    hotels: [],
    featured: [],
    recco: [],
    userstatus: false,
  };
  componentDidMount(){
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/viewedhotels",
    }).then((res) => {
        this.setState({ hotels: res.data});
        console.log(res.data)
      });
      Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/getfeaturedhotels",
      }).then((res) => {
          this.setState({ featured: res.data});
          console.log(res.data)
        });
      Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/recco",
      }).then((res) => {
          this.setState({ recco: res.data});
          console.log(res.data)
        });
        Axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:4000/userstatus",
        }).then((res) => {
            this.setState({ userstatus: res.data});
            console.log(res.data)
          });
  }
render(){
  return (
    <>
      <HeroSection />
      <section style={{paddingTop: "7%", paddingBottom: "5%"}}>
      <div style={{background:"rgba(255,255,255 ,.8)"}}>
          <h1 style={{fontSize: "6rem"}}>Welcome to <b>trvl</b></h1>

          <h1 style={{fontSize: "3.5rem", display: "inline-block", marginLeft: "auto", marginRight:"auto"}}>
          <Typewriter style={{display: "block", marginLeft: "auto", marginRight:"auto"}}
            options={{
              strings: ['Travel Tokyo 🗼','Beach please 🏄‍♂️','Explore New York City 🗽','Namaste India 🛺','Experience scuba diving 🐠','Global cuisines 🍣'],
              autoStart: true,
              loop: true,
            }}
          />
          </h1>

          {this.state.userstatus
          ?
          <div>
          <h1>Based on your browsing history</h1><br/>
          <HotelCardComp hotels={this.state.recco.slice(0,5)} /> <br/>

          <h1>Featured Hotels</h1><br/>
          <HotelCardComp hotels={this.state.featured} />
          </div>
          :
          <div>
          <h1>Featured Hotels</h1><br/>
          <HotelCardComp hotels={this.state.featured} /> <br/>
          <h1>Login to view personalized recommendations</h1><br/>
          </div>
        }
          
          
      </div>
    </section>


    <section style={{zIndex: "-1", background: "#003060", height: "400px", paddingTop: "5%"}}>

        <div className="container">

            <div className="left">
              <h1 style={{fontSize: "5rem"}}><b>trvl.</b></h1>
              [ˈtrav(ə)l] (n.) <br />
              <span style={{fontSize: "2rem"}}>
              One platform for all your travel plans - flights ✈️, hotels 🏡, and cab rentals 🚕 - we got you covered! 
              </span>
            </div>

            <div className="right">
              <Worldmap />
            </div>
    
        </div>
    </section>
      <Cards />
      <Footer />
    </>
  );
}
}

export default Home;
