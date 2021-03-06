// This is the Navigation bar Component for all pages - "NavbarComp"

import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../App.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Axios from "axios";

export default class NavbarComp extends Component {
  state = {
    status: false
  }

  componentDidMount(){ 
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/userstatus",
    }).then((res) => {  
      if (res.data){
        this.setState({
          status: true
        })
      }
    });
  }

  render() {
    if (this.state.status){
      return (
        <Navbar
          style={{
            padding: "2.5%",
            paddingRight: "3%",
            paddingLeft: "3%",
            height: "10%",
            fontSize: "2.5rem",
            width: "100%",
            overflowX: "hidden",
            overflowY: "hidden",
            position: "absolute"
          }}
          fixed="top"
        >
          
  
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/profile"><AccountCircleIcon style={{fontSize: "xx-large", color: "white" }} /></Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      );
    }

    else{
      return (
        <Navbar
          style={{
            padding: "2.5%",
            paddingRight: "3%",
            paddingLeft: "3%",
            height: "0px",
            fontSize: "2.5rem",
            width: "100%",
            overflowX: "hidden",
            overflowY: "hidden",
            position: "absolute"
          }}
          fixed="top"
        >
          
        </Navbar>
      );
    }
  }
}