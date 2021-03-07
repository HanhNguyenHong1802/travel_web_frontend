import axios from "axios";
import React, {Component} from "react";
import ProfileBookedComp from "../../components/component/booking"
import ProfileHotelsComp from "../../components/component/profilehotels"
import Footer from "../Footer";
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
            <p style={{fontSize: '2rem', padding: 'auto'}}>Account</p>
               <h2><b>{this.state.name}, </b> {this.state.email} . <a href="#"> Enter profile</a></h2> 
               <div class="row" style={{marginTop: '15px'}}>
  <a href="#">
  <div class="column">
    <div class="card">
    <i class="fas fa-id-card"></i>
      <h3>Personal Info</h3>
    </div>
  </div>
</a>
<a href="#">
  <div class="column">
    <div class="card">
    <i class="fas fa-wallet"></i>
      <h3>Payment</h3>
    </div>
  </div>
</a>  
<a href="#">
  <div class="column">
    <div class="card">
    <i class="fas fa-user"></i>
      <h3>Private</h3>
    </div>
  </div>
  </a>
  <a href="#">
  <div class="column">
    <div class="card">
    <i class="fas fa-bell"></i>
      <h3>Anouncement</h3>
    </div>
  </div>
  </a>
  <br/>
  <center>
              <button className="logout" onClick={this.logout}> Logout</button>
            </center>
            <br/>
  <section style={{backgroundColor: 'rgba(255, 255, 255, 0.527)'}}>
            <br/><br/><br/><br/>
            <div className="login">
            <h1><b>Your Bookings</b></h1>
            <ProfileBookedComp hotels={this.state.booked}/>
            <br/>
            <h1><b>Your Bucketlisted Hotels</b></h1>
            <ProfileHotelsComp hotels={this.state.bucketlistedhotels}/>

            <br/>
      

            </div>
          </section>
</div>
<br/>
<Footer/>

 </div>
        );

    }
}

export default Profile;