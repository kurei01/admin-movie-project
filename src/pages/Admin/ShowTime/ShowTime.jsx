import { Button, Cascader, DatePicker, Form, InputNumber } from "antd";
import React from "react";
import "./ShowTime.scss";

export default function ShowTime() {
  // hệ thống rạp
  const onChangeCinema = (value: string[]) => {
    console.log(value);
  };
  // cụp rạp
  const onChangeCineplex = (value: string[]) => {
    console.log(value);
  };

  const onChangeShowDateShowTime = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  const onChangeInputNumber = (value) => {
    console.log('changed', value);
  };

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
      >
        <Form.Item label="Cinema">
          <Cascader
            options={[{ label: "aa", value: "aaa" }]}
            onChange={onChangeCinema}
            placeholder="select cinema"
          />{" "}
        </Form.Item>

        <Form.Item label="Cineplex">
          <Cascader
            options={[{ label: "aa", value: "aaa" }]}
            onChange={onChangeCineplex}
            placeholder="select cineplex"
          />{" "}
        </Form.Item>

        <Form.Item label="Show date, show time">
          <DatePicker showTime onChange={onChangeShowDateShowTime} onOk={onOk} />
        </Form.Item>

        <Form.Item label="Show date, show time">
          <InputNumber min={75000} max={150000} onChange={onChangeInputNumber} />
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
