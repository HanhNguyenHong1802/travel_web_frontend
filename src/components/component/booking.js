import React from "react";
import "../../App.css";
import "../../styles/hotels.css";


const BookingComp = ({ hotels }) => {
    return (
      <div>
  
          {hotels.map((hotel) => (
            <li key={hotel.hotelname}>

              <div className="card">
                  <div className="hotel-container">
                <img
                  className="hotel-image"
                  src={hotel.hotelimageurl}
                  alt="Hotel Image"
                />
              </div>
                <div className="right3">

                    <div className="hotel-name">
                      {hotel.hotelname}
                    </div>


                  <div className="hotel-location">
                    {hotel.hotellocation}
                  </div>

                  <div className="hotel-price">${hotel.hotelcost}<br/> </div>

                </div>

              </div>
            </li>
          ))}
      </div>
    );
  };

export default BookingComp;