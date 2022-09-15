import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Table } from "antd";
import { Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesAction } from "redux/actions/MovieManagerAction";
import "./Films.scss";

const { Search } = Input;

export default function Films() {
  const dispatch = useDispatch();
  const moviesDefault = useSelector((state) => state.MovieManagerReducer);
  console.log(moviesDefault);

  const columns = [
    {
      title: "ID",
      dataIndex: "maPhim",
      value: (text, object) => <span>{text}</span>,
      sorter: (a, b) => a.maPhim - b.maPhim,
      defaultSortOrder: "ascend",
      sortDirections: ["descend"],
      width: "7%",
    },
    {
      title: "Image",
      dataIndex: "hinhAnh",
      render: (text, films, index) => (
        <>
          <img
            className="imageMovie mx-auto"
            src={text}
            alt={films.tenPhim}
            onError={(e) => {
              e.target.onError = null;
              e.target.src = `https://picsum.photos/id/${index}/70/70`;
            }}
          />
        </>
      ),
      width: "15%",
      align: "center",
      // defaultSortOrder: "descend",
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Name",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let nameFilmA = a.tenPhim.toLowerCase().trim();
        let nameFilmB = b.tenPhim.toLowerCase().trim();
        return nameFilmA > nameFilmB;
      },
      sortDirections: ["descend"],
      width: "20%",
    },
    {
      title: "Description",
      dataIndex: "moTa",
      render: (text, film) => (
        <>
          {film.moTa.length > 50 ? film.moTa.substr(0, 50) + "..." : film.moTa}
        </>
      ),
      width: "25%",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, film) => (
        <>
          <NavLink className=" text-indigo-800 mr-2 text-2xl" to="/">
            <EditOutlined />
          </NavLink>
          <NavLink className="text-red-600 text-2xl" to="/">
            <DeleteOutlined />
          </NavLink>
        </>
      ),
    },
  ];
  const data = moviesDefault.lstFilm;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  useEffect(() => {
    dispatch(fetchMoviesAction());
  }, []);

  const onSearch = (value) => console.log(value);
  return (
    <div className="container mx-auto Films text-center">
      <h1 className="text-4xl mb-4">Movie Manager</h1>
      <Button className="mr-5">Add Movie</Button>
      <Search
        className="w-1/3 mb-5"
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
      />
      <Table
        className="sideTable"
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  );
}
