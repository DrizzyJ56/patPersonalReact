import React from "react";
import { Card } from 'antd';
const { Meta } = Card;

function Contact(props) {

  return(
    <div id="contact-div">
  <a href = "mailto: PatrickMcLaughlinConsulting@gmail.com?subject=Request for Consulting"><Card
    id="contact-card"
    hoverable
    style={{
      width: "40vw",
    }}
    cover={<img alt="contact Patrick McLaughlin" src={require("../footerLogos/contact.jpeg")} />}
  >
    <Meta title="Consult with Patrick" description="Email: PatrickMcLaughlinConsulting@gmail.com"/>
  </Card>
  </a>
    </div>
  )
}

export default Contact;
