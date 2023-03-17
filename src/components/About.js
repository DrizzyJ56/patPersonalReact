import React, { useState } from "react";
import { Button, Space, Card, Col, Row, Carousel } from "antd";

const contentStyle = {
  height: "fit-content",
  width: "fit-content",
  color: "#eff",
  lineHeight: "50px",
  textAlign: "center",
  background: "#253A68",
  // borderRadius: "50%"
};

function About(props) {
  return (
    <div id="about-container" style={{ backgroundColor: "#E6F4FF" }}>
      <div id="about-header">
        <h2>Patrick M. McLaughlin</h2>
      </div>
      <div id="pat-container">
        <div id="pat-info">
          <p>
            Pat McLaughlin is the Director of Navy Programs at Kwaan Consulting.
            He has been an Executive Consultant and leader in the consulting
            industry since his retirement for Federal Service in 2009. He spent
            31 years in the Department of Defense. The last 12 of those years as
            a member of the Senior Executive Service(SES) with the Navy working
            for the Chief of Naval Operations as Assistant Deputy CNO for
            Integration of Capabilities and resources, and Assistant Deputy CNO
            for Manpower, Personnel, Training and Education. He is skilled in
            Financial Management, Contracts, Strategy, Change Management, Ops
            Research Analysis and IT/Digital Transformation.
          </p>
        </div>
      </div>
      <div id="content-container">
        <div id="caps-main-container">
          <h3 style={{fontSize: "40px"}}>Talents</h3>
          <div id="caps-img-container">
            <div className="caps" id="Change">
              <h4>Change Management</h4>
              <img
                id="image2"
                height="100px"
                width="100px"
                src={require("../footerLogos/settings.png")}
                onClick={(e)=>{
                  e.preventDefault()
                  document.getElementById("image2").style.display = "none"
                  document.getElementById("list2").style.display = "initial"
                }}
              />
              <ul id="list2" onClick={(e)=>{
                  e.preventDefault()
                  document.getElementById("list2").style.display = "none"
                  document.getElementById("image2").style.display = "initial"
                }}>
                <li>War Gaming and Modeling</li>
                <li>Change Planning</li>
                <li>Environmental Scans</li>
                <li>Strategic Communications</li>
                <li>Executive Coaching</li>
                <li>Facilitation</li>
              </ul>
            </div>
            <div className="caps" id="Strat">
              <h4>Strategic and Human Capital Planning</h4>
              <img
                id="image1"
                height="100px"
                width="100px"
                src={require("../footerLogos/icons8-strategy-100.png")}
                onClick={(e)=>{
                  e.preventDefault()
                  document.getElementById("image1").style.display = "none"
                  document.getElementById("list1").style.display = "initial"
                }}
              />
              <ul id="list1" onClick={(e)=>{
                  e.preventDefault()
                  document.getElementById("list1").style.display = "none"
                  document.getElementById("image1").style.display = "initial"
                }}>
                <li>Strategic Planning</li>
                <li>Workforce to Product Alignment</li>
                <li>Execution Tracking</li>
                <li>Workforce Shaping</li>
                <li>Workforce Planning</li>
                <li>Organizational Development</li>
                <li>Resource Optimization</li>
                <li>Analysis</li>
              </ul>
            </div>
            <div className="caps" id="Digital">
              <h4>Digital Transformation IT Strategy</h4>
              <img
                id="image4"
                height="100px"
                width="100px"
                src={require("../footerLogos/laptop-icon-19529.png")}
                onClick={(e)=>{
                  e.preventDefault()
                  document.getElementById("image4").style.display = "none"
                  document.getElementById("list4").style.display = "initial"
                }}
              />
              <ul id="list4" onClick={(e)=>{
                  e.preventDefault()
                  document.getElementById("list4").style.display = "none"
                  document.getElementById("image4").style.display = "initial"
                }}>
                <li>Enterprise Architecture</li>
                <li>Portfolio Management</li>
                <li>Cloud Computing</li>
                <li>Organization & Governance</li>
                <li>Enterprise Data Strategy</li>
              </ul>
            </div>
            <div className="caps" id="Talent">
              <h4>Talent Management</h4>
              <img
                id="image3"
                height="100px"
                width="100px"
                src={require("../footerLogos/computer-icons-icon-plaza-symbol-organization-people-icon-d1f937f65f085d1a2b6151dfdbfe5b04.png")}
                onClick={(e)=>{
                  e.preventDefault()
                  document.getElementById("image3").style.display = "none"
                  document.getElementById("list3").style.display = "initial"
                }}
              />
              <ul id="list3" onClick={(e)=>{
                  e.preventDefault()
                  document.getElementById("list3").style.display = "none"
                  document.getElementById("image3").style.display = "initial"
                }}>
                <li>Succession Planning</li>
                <li>Performance Management</li>
                <li>Competency Management</li>
                <li>Learning & Development</li>
                <li>360 Degree Assessments</li>
                <li>Performance Coaching</li>
              </ul>
            </div>
          </div>
          <Space id="button" wrap>
            <div>
              <Button
                type="primary"
                id="more"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("image1").style.display = "none";
                  document.getElementById("list1").style.display = "initial";
                  document.getElementById("image2").style.display = "none";
                  document.getElementById("list2").style.display = "initial";
                  document.getElementById("image3").style.display = "none";
                  document.getElementById("list3").style.display = "initial";
                  document.getElementById("image4").style.display = "none";
                  document.getElementById("list4").style.display = "initial";
                  document.getElementById("more").style.display = "none";
                  document.getElementById("less").style.display = "initial";
                }}
              >
                See More
              </Button>
              <Button
                type="primary"
                id="less"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("image1").style.display = "initial";
                  document.getElementById("list1").style.display = "none";
                  document.getElementById("image2").style.display = "initial";
                  document.getElementById("list2").style.display = "none";
                  document.getElementById("image3").style.display = "initial";
                  document.getElementById("list3").style.display = "none";
                  document.getElementById("image4").style.display = "initial";
                  document.getElementById("list4").style.display = "none";
                  document.getElementById("more").style.display = "initial";
                  document.getElementById("less").style.display = "none";
                }}
              >
                See Less
              </Button>
            </div>
          </Space>
        </div>
        <div id="prior">
          {/* <h3>Prior Positions Held</h3> */}
            <h3 id="held">Positions Held</h3>
          <Carousel style={{ margin: "2rem", color: "#eff" }} autoplay>
            <div>
              <Card
                className="cards"
                style={contentStyle}
                bordered={false}
              >
                <h3>Chief of Naval Operations, Washington, D.C.</h3>
                <ul>
                  <li>
                    Assistant Deputy CNO, Integration of Capabilities and
                    Resources (N8B), 2008–2009
                  </li>
                  <li>
                    Assistant Deputy CNO, Manpower, Personnel, Training &amp;
                    Education MPT&amp;E (N1B), 2007–2008
                  </li>
                  <li>
                    Financial Manager &amp; Chief Resources Officer (N10),
                    2006–2007
                  </li>
                  <li>
                    Director, Analysis, Programming &amp; Integration (N70),
                    2005–2006
                  </li>
                  <li>
                    Principal Assistant for Acquisition and Budgeting, Air
                    Warfare (N78), 2001–2003
                  </li>
                </ul>
              </Card>
            </div>
            <div>
              <Card
                className="cards"
                style={contentStyle}
                bordered={false}
              >
                <h3>Naval Air Systems Command, Lexington Park, MD</h3>
                <ul>
                  <li>
                    Deputy Assistant Commander for Logistics and Industrial
                    Operations, 2003 –2005
                  </li>
                  <li>
                    Head, Tactical Aircraft and Engines Contracts Department,
                    1997 –2001
                  </li>
                  <li>
                    Director of Contracts Joint Strike Fighter Program, 1994 –
                    1997
                  </li>
                  <li>
                    Additional Contracts and Pricing Positions 1982 – 1994
                  </li>
                </ul>
              </Card>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default About;
