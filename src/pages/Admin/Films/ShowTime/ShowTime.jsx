import { Button, DatePicker, Form, InputNumber, Select } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createShowTimesAction,
  getCinemaInfoAction,
  getCineplexInfoAction,
} from "redux/actions/MovieManagerAction";
import * as yup from "yup";
import "./ShowTime.scss";

const schema = yup.object().shape({
  ngayChieuGioChieu: yup.string().required("*Trường này bắt buộc nhập"),
  giaVe: yup.string().required("*Trường này bắt buộc nhập"),
  maRap: yup.string().required("*Trường này bắt buộc nhập"),
});

export default function ShowTime(props) {
  const dispatch = useDispatch();
  const cinemas = useSelector((state) => state.CinemaManagerReducer.cinema);
  const cineplex = useSelector((state) => state.CinemaManagerReducer.cineplex);

  const createShowtimesSuccess = () => {
    props.history.push("./films");
  };

  const formik = useFormik({
    initialValues: {
      maPhim: +props.match.params.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: (value) => {
      console.log(value);
      dispatch(createShowTimesAction(value, createShowtimesSuccess));
    },
    validationSchema: schema,
    validateOnChange: false,
  });

  //chọn hệ thống rạp
  const onChangeCinema = (value) => {
    //dispatch action get api cineplex
    dispatch(getCineplexInfoAction(value));
  };
  //chọn cụp rạp
  const onChangeCineplex = (value) => {
    formik.setFieldValue("maRap", value);
  };

  const onChangeShowDateShowTime = (value, dateString) => {
    formik.setFieldValue("ngayChieuGioChieu", dateString);
  };

  const onOkShowDateShowTime = (value) => {
    value = moment(value).format("DD/MM/YYYY hh:mm:ss");
    formik.setFieldValue("ngayChieuGioChieu", value);
  };

  const onChangePrice = (value) => {
    formik.setFieldValue("giaVe", value);
  };

  useEffect(() => {
    dispatch(getCinemaInfoAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="showTime">
      <h3 className="title w-48 p-1 text-indigo-800 rounded-md">
        create showtimes
      </h3>
      <Form
        // onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 8,
        }}
        layout="horizontal"
        size="default"
        onSubmitCapture={formik.handleSubmit}
      >
        <Form.Item label="Cinema">
          <Select
            onBlur={formik.handleBlur}
            options={cinemas?.map((cinema) => ({
              label: cinema.tenHeThongRap,
              value: cinema.maHeThongRap,
            }))}
            onChange={onChangeCinema}
            placeholder="select cinema"
            name="cinema"
          />
        </Form.Item>

        <Form.Item label="Cineplex">
          <Select
            onBlur={formik.handleBlur}
            options={cineplex?.map((item) => ({
              label: item.tenCumRap,
              value: item.maCumRap,
            }))}
            onChange={onChangeCineplex}
            placeholder="select cineplex"
            name="maRap"
          />
          {formik.touched.maRap && formik.errors.maRap && (
            <p className="text-red-600 error">{formik.errors.maRap}</p>
          )}
        </Form.Item>

        <Form.Item label="Show date, show time">
          <DatePicker
            format="DD/MM/YYYY hh:mm:ss"
            showTime
            onChange={onChangeShowDateShowTime}
            onOk={onOkShowDateShowTime}
            onBlur={formik.handleBlur}
            name="ngayChieuGioChieu"
          />
          {formik.touched.ngayChieuGioChieu &&
            formik.errors.ngayChieuGioChieu && (
              <p className="text-red-600 error">
                {formik.errors.ngayChieuGioChieu}
              </p>
            )}
        </Form.Item>

        <Form.Item label="Ticket price">
          <InputNumber
            min={75000}
            max={150000}
            name="giaVe"
            onChange={onChangePrice}
            onBlur={formik.handleBlur}
          />
          {formik.touched.giaVe && formik.errors.giaVe && (
            <p className="text-red-600 error">{formik.errors.giaVe}</p>
          )}
        </Form.Item>

        <Form.Item className="text-end">
          <Button className="addShowTime" htmlType="submit">
            create showtimes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
