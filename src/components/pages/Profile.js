import axios from "axios";
import React, {Component} from "react";
import { Link } from "react-router-dom";
import ProfileBookedComp from "../../components/component/booking"
import ProfileHotelsComp from "../../components/component/profilehotels"
import Footer from "../Footer";
import ScrollToTop from "react-scroll-to-top";

class Profile extends Component {
state = {
    bucketlistedhotels: [],
    bookedhotels: [],
    address: "",
    name: "",
    mobile: 0,
    booked: [],
    bucketlist: [],
    modal: false,
    newmobile: 0,
    newaddress: "",
};

componentDidMount() {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/getuser",
    }).then((res) => {
      if (res.data === "Please login first"){
        alert(res.data)
      }
      else{
        this.setState({ mobile: res.data.mobile,
          name: res.data.name,
          email :res.data.email,
          address: res.data.address,
          booked: res.data.booked,
          bucketlist: res.data.bucketlist,
          visited: res.data.visited});
        console.log(res.data)
      }
      //console.log(`booked`, res.data.booked)
    });

    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/getbucketlist",
    }).then((res) => {
        this.setState({ bucketlistedhotels: res.data });
    });

  };

    logout = () => {
      axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/logout",
      }).then((res) => {
        alert("You are logged out!");
        //console.log(res.data);
        window.location.reload();
      });
    };


    updateNum = () => {
      axios({
        method: "POST",
        data: {
          mobile: this.state.newmobile,
        },
        withCredentials: true,
        url: "http://localhost:4000/update/number",
      }).then((res) => console.log(res));
      window.location.reload(false);
    };
  
    updateAdd = () => {
      axios({
        method: "POST",
        data: {
          address: this.state.newaddress,
        },
        withCredentials: true,
        url: "http://localhost:4000/update/address",
      }).then((res) => console.log(res));
      window.location.reload(false);
    };
  
    handleNumChange = async(e) => {
      await this.setState({newmobile: e.target.value});
    }
  
    handleAddChange = async(e) => {
      await this.setState({newaddress: e.target.value});
    }
    render(){
        return (
            <div className="backgroungimg">
            <p style={{fontSize: '2rem', padding: 'auto', marginLeft:'20px'}}>Account</p>
               <h2 style={{ marginLeft:'20px'}}><b>{this.state.name}, </b> {this.state.email} . <a href="#"> Enter profile</a></h2> 
               <div className="row" style={{marginTop: '15px'}}>
  {/* <Link to="/profile">
  <div className="column">
    <div className="card">
    <i className="fas fa-id-card"></i>
      <h3>Personal Info</h3>
    </div>
  </div>
</Link>
<a href="#">
  <div className="column">
    <div className="card">
    <i className="fas fa-wallet"></i>
      <h3>Payment</h3>
    </div>
  </div>
</a>  
<a href="#">
  <div className="column">
    <div className="card">
    <i className="fas fa-user"></i>
      <h3>Private</h3>
    </div>
  </div>
  </a>
  <a href="#">
  <div className="column">
    <div className="card">
    <i className="fas fa-bell"></i>
      <h3>Anouncement</h3>
    </div>
  </div>
  </a> */}
  <section style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
  <div>
  <center>
  <h3>Registered Mobile number: <b>{this.state.mobile}</b><br/><br/> Registered Address: <b>{this.state.address}</b></h3>
            <br></br>
            <h4> Update your number 📞: &nbsp;<input className="input-box" type="text" onChange={this.handleNumChange} style={{background:'white', color:'black', border:'visible'}}/>
            &nbsp; &nbsp;
            <button className="otherbuttons" onClick={this.updateNum}> Update Mobile</button>
            </h4> 
            <h4> Update your address 🏡: &nbsp;<input className="input-box" type="text" onChange={this.handleAddChange} style={{background:'white', color:'black'}}/>
            &nbsp; &nbsp;
            <button className="otherbuttons" onClick={this.updateAdd}> Update address</button>
            </h4>

            <br />
            </center>
            
            {/* <center>
              <button className="logout" onClick={this.logout}> Logout</button>
            </center> */}
            </div>
            <br/>
            <br/><br/><br/><br/>
            <table style={{tableLayout:'fixed', width:'100%'}}>
            <td>
            <h1><b>Your Bookings</b></h1>
            <ProfileBookedComp hotels={this.state.booked}/>
            <br/></td>
            <td>
            <h1><b>Your Bucketlisted Hotels</b></h1>
            <ProfileHotelsComp hotels={this.state.bucketlistedhotels}/>

            <br/></td>
            </table>
          </section>
</div>
<br/>
<ScrollToTop smooth color="#6f00ff" />
<Footer/>

 </div>
        );

    }
}

export default Profile;