import { Button, DatePicker, Form, Input, InputNumber, Switch } from "antd";
import React, { Fragment, useState } from "react";
import { useFormik } from "formik";
import "./Addnew.scss";
import moment from "moment";

export default function Addnew(props) {
  const [imgSrc, setImgSrc] = useState("");

  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  const handleChangeDatePicker = (value) => {
    let openingDay = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", openingDay);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (e) => {
    //get file from e
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png" ||
      file.type === "image/gif"
    ) {
      //readFile
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result); //base64 img
      };
      formik.setFieldValue("hinhAnh", file);

      // formik.setErrors()
    }
  };

  return (
    <div className="Addnew">
      <h3 className="title ">Add new movie</h3>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        size="default"
      >
        <Form.Item label="Movie's name">
          <Input
            name="tenPhim"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
            name="moTa"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item label="Opening day">
          <DatePicker format={"DD/MM/YY"} onChange={handleChangeDatePicker} />
        </Form.Item>
        <Form.Item label="Now showing" valuePropName="checked">
          <Switch onChange={handleChangeSwitch("dangChieu")} />
        </Form.Item>
        <Form.Item label="Coming soon" valuePropName="checked">
          <Switch onChange={handleChangeSwitch("sapChieu")} />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch onChange={handleChangeSwitch("hot")} />
        </Form.Item>
        <Form.Item label="Rated">
          <InputNumber
            onChange={handleChangeSwitch("danhGia")}
            min={1}
            max={10}
          />
        </Form.Item>
        <Form.Item className="mb-10" label="Image">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/jpg, image/gif"
          />
          <br />
          <img src={imgSrc} alt="..." />
        </Form.Item>

        <Form.Item className="text-end mr-40">
          <Button className=" bg-blue-600 text-white" htmlType="submit">
            submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
