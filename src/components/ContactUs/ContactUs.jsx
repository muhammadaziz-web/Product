import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Instagram from "../../images/instagram.png"
import Facebook from "../../images/facebook.png"
import Twitter from "../../images/Vector.png"
import { NavLink } from "react-router-dom";

const ContactUs = () => {

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const center = {
    lat: 37.7763,
    lng: -122.4241,
  };

  useEffect(() => {
    if (!isMapLoaded) {
      setIsMapLoaded(true);
    }
  }, [isMapLoaded]);


  return (
    <div>
        <div className="ContactUs">
            <div className="container">
                <h1>
                    Contact Us
                </h1>
                <p>
                    Need more detailed information? <br /> 
                    Get in touch with us.
                </p>
                <div className="ContactUsLink">
                    <NavLink >
                        <img src={Instagram} alt="Instagram" />
                    </NavLink>
                    <NavLink >
                        <img src={Facebook} alt="Facebook" />
                    </NavLink>
                    <NavLink >
                        <img src={Twitter} alt="Twitter" />
                    </NavLink>
                </div>
                <div className="map">
                    <LoadScript googleMapsApiKey="https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao">
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
                        <Marker position={center} />
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactUs;
