import React, { Component } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

class Sidebar extends Component {
  handleClick = (e) => {
    console.log("click ", e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <Link href="/">
              <a className="c-header__link">Santiago Correa</a>
            </Link>
          }
        >
          <Menu.ItemGroup key="g1">
            <Menu.Item key="1">
              <Link href="/about" passHref>
                <a className="c-header__link">About</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/Projects" passHref>
                <a className="c-header__link">Projects</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href="/contact" passHref>
                <a className="c-header__link">Contact Me</a>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sidebar;
