import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  FormOutlined,
  HomeOutlined,
  BankOutlined
} from "@ant-design/icons";
import {Home, About, Contact, Kwaan} from "./";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const subNavArr = ["Home", "About", "Kwaan", "Contact"];
const items1 = ["Home", "About", "Kwaan", "Contact"].map((key) => ({
  key,
  label: `${key}`,
}));
const items2 = [HomeOutlined, LaptopOutlined, BankOutlined,FormOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `${subNavArr[index]}`,
      // children: new Array(4).fill(null).map((_, j) => {
      //   const subKey = index * 4 + j + 1;
      //   return {
      //     key: subKey,
      //     label: `option${subKey}`,
      //   };
      // }),
    };
  }
);

const Navbar = (props) => {
  
  let url = props.url
  let setUrl = props.setUrl

  const [collapsed, setCollapsed] = useState(false)
  const getComponent = async () => {
    await setUrl(document.location.href.slice(22))
    return url
  }
 
    getComponent()
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      {/* <Header className="header">
        <Menu theme="dark" mode="horizontal">
          <div id="logo-div">
            <p id="logo">PMC</p>
          </div>
          <Menu.Item key="Home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="About">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="Contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Header> */}
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
            collapsible="true"
            collapsed={collapsed}
            onCollapse={setCollapsed}
            collapsedWidth={0}
            breakpoint="md"
            
          >
            <Menu
              mode="inline"
              style={{
                height: "100%",
              }}
            >
              <Menu.Item key="Home" icon={items2[0].icon}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="About" icon={items2[1].icon}>
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="Kwaan" icon={items2[2].icon}>
                <Link to="/kwaan">Kwaan</Link>
              </Menu.Item>
              <Menu.Item key="Contact" icon={items2[3].icon}>
                <Link to="/contact">Contact</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            {!url.length ? <Home /> : url.length > 6 ? <Contact/> : url.startsWith("a") ? <About /> : <Kwaan/> }
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          bottom: 0,
          paddingLeft: "15vw",
          paddingRight: "auto",
          textAlign: "center",
        }}
      >
        <a href="https://www.linkedin.com/in/patrick-mclaughlin-a8604111/" target="_blank"><img src={require("../footerLogos/linkedin.png")} height="40vh" width="40vw" /></a>
        <p>Patrick Mclaughlin Consulting ©2023 Website Designed by Joel Blevins</p>
      </Footer>
    </Layout>
  );
};
export default Navbar;
