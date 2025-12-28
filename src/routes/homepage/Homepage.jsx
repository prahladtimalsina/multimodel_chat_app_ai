import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="left">
        <h1>Welcome to AI Chat App</h1>
        <h2>Your personal AI-powered chat assistant.</h2>
        <h3>
          Chat with our AI assistant anytime, anywhere. Get instant responses
          and assistance tailored to your needs.
        </h3>
        <Link to="/dashboard">Go to Dashboardd</Link>
      </div>

      <div className="right">
        <div className="imgContainer">
          {/* Placeholder for image container */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          officia dolorum magnam velit at repellendus perferendis atque nesciunt
          voluptate iste, aut, eum deleniti. Quibusdam sunt corrupti dolores
          atque nulla itaque fugiat, porro accusantium, aspernatur corporis
          officiis iusto ipsa dolorem tenetur minus magnam qui maxime, obcaecati
          aut illo ipsam blanditiis. Eos vero, id quibusdam soluta magni ipsa
          ducimus quaerat praesentium deserunt obcaecati laborums.
          <div className="bgContainer">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            quis nisi nobis eaque repellendus blanditiis obcaecati velit?
            Suscipit maiores aspernatur magnam voluptas voluptatum. Eaque
            accusamus debitis repellat! Temporibus, deleniti velit?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
