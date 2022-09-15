import React, { Fragment, useEffect, useState } from "react";
import { Route, NavLink } from "react-router-dom";
import {
  DesktopOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import logo from "assets/adminLogo.jpg";
import "./AdminTemplate.scss";
const { Header, Sider, Content } = Layout;

export const AdminTemplate = (props) => {
  // path, exact, Component
  const { Component, ...restProps } = props;
  const [collapsed, setCollapsed] = useState(false);

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
      <h1 className="text-white text-center font-bold text-xl pt-4">
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
                <div className="logo p-5">
                  <img src={logo} alt="logo" />
                </div>
                <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <NavLink to="/admin/users">Users</NavLink>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    <NavLink to="/admin/films">Films</NavLink>
                  </Menu.Item>
                  <Menu.Item key="3" icon={<DesktopOutlined />}>
                    <NavLink to="/admin/showtimes">Showtime</NavLink>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header className="header site-layout-background bg-indigo-500 mb-2 ml-2">
                  {operations}
                </Header>
                <Content className="site-layout-background m-2 p-3 bg-indigo-100">
                  {<Component {...propsRoute} />}
                </Content>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};
