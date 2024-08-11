import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="section footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
            <h3>Mirpur 9</h3>
            <p>Dhaka, Bangladesh</p>
            <p>+8801 2345 67890</p>
            <Link to="#" className="text-white">
              m9@restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>Farmgate</h3>
            <p>Dhaka, Bangladesh</p>
            <p>+8801 2345 67891</p>
            <Link to="#" className="text-white">
              fg@restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>Gulshan</h3>
            <p>Dhaka, Bangladesh</p>
            <p>+8801 2345 67892</p>
            <Link to="#" className="text-white">
              gl@restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>Motijeel</h3>
            <p>Dhaka, Bangladesh</p>
            <p>+8801 2345 67893</p>
            <Link to="#" className="text-white">
              mj@restaurant.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
