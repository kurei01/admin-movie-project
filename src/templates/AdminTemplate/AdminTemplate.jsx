import React, { Fragment, useEffect, useState } from "react";
import { Route, NavLink } from "react-router-dom";
import {
  DesktopOutlined,
  UserOutlined,
  VideoCameraOutlined,
  VideoCameraAddOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import logoSider from "assets/adminLogo.jpg";
// import logo from "assets/CyberBookingMovie.png";
import "./AdminTemplate.scss";
const { Header, Sider, Content } = Layout;

export const AdminTemplate = (props) => {
  // path, exact, Component
  const { Component, ...restProps } = props;
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(
    localStorage.getItem("keyMenu") || "1"
  );
  // console.log(selectedKey);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // if (!localStorage.getItem(USER_LOGIN)) {
  //   alert("bạn không có quyền truy cập trang này");
  //   return <Redirect to="/" />;
  // }

  // if (userLogin.maLoaiNguoiDung !== "QuanTri") {
  //   alert("bạn không có quyền vào trang này");
  //   return <Redirect to="/" />;
  // }

  const operations = (
    <Fragment>
      <h1 className="text-cyan-100 text-center font-bold text-2xl pt-4">
        Admin BookingMovie
      </h1>
    </Fragment>
  );

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        // props.location, props.history, props.match
        return (
          <Fragment>
            <Layout className="adminTemplate">
              <Sider
                theme="light"
                className="sider mr-3"
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
              >
                <div className="logoSider p-5">
                  <img src={logoSider} alt="logosider" />
                </div>
                <Menu
                  onClick={(e) => {
                    setSelectedKey(e.key.toString());
                    localStorage.setItem("keyMenu", e.key.toString());
                  }}
                  theme="light"
                  mode="inline"
                  defaultSelectedKeys={selectedKey}
                  selectedKeys={selectedKey}
                  defaultOpenKeys={["sub1"]}
                >
                  {/* movie */}
                  <Menu.SubMenu
                    key="sub1"
                    icon={<DesktopOutlined />}
                    title="Movie Manager"
                  >
                    <Menu.Item key="1" icon={<VideoCameraOutlined />}>
                      <NavLink to="/films">Movies</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraAddOutlined />}>
                      <NavLink to="/films/addnew">Add movie</NavLink>
                    </Menu.Item>
                  </Menu.SubMenu>
                  {/* user */}
                  <Menu.SubMenu
                    key="sub2"
                    icon={<UserOutlined />}
                    title="User Manager"
                  >
                    <Menu.Item key="3" icon={<UserOutlined />}>
                      <NavLink to="/users">Users</NavLink>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UserAddOutlined />}>
                      <NavLink to="/users/addnew">Add user</NavLink>
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header className="header site-layout-background bg-indigo-500 mb-2 ml-2">
                  {operations}
                </Header>
                <Content className="site-layout-background content m-2 p-3 bg-indigo-100">
                  {
                    <Component
                      setSelectedKey={setSelectedKey}
                      {...propsRoute}
                    />
                  }
                </Content>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};
