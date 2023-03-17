import React from "react";
import { Link } from "react-router-dom";
import { Button, Space } from 'antd';

const Home = () => {
  return (
    <div className="home-page">
      <div className="header-div">
        <img
          id="header-img"
          src={require("../footerLogos/washington dc image.jpeg")}
        />
        <div id="center">
          <h1>Patrick Mclaughlin Consulting</h1>
          <p id="desc">Leader in Defense, Aviation, and Manpower, with expertise in Strategy, Change Management, Technology, and Decision Analytics</p>
          <p id="award">Recipient of the President's Meritorious Executive Award and the President's Distinguished Executive Award</p>
          <Space className="site-button-ghost-wrapper" wrap>
            <Link to="/contact"><Button id="contact-button" ghost>Contact</Button></Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Home;
