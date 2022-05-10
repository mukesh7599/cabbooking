import React from "react";
import { Form, Input, Row, Col } from "antd";
const Contactinfo = () => {
  return (
    <div style={{ margin:"0px 1rem 0px 10px" }}>
      <Form colon={false} labelCol={{ span: 3 }} wrapperCol={{ span: 20 }}>
        <Row gutter={12}>
          <Col className="gutter-row" span={24}>
            <Form.Item
              style={{ marginTop: "15px" }}
              label="Name"
              name="name"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please enter your name!",
                },
              ]}
            >
              <Input allowClear placeholder="Enter Your Name" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={24}>
            <Form.Item
              // className="form-to-item"
              label="E-Mail ID"
              name="emailid"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please Enter Your E-Mail ID!",
                },
              ]}
            >
              <Input allowClear placeholder="Enter Your E-Mail ID" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={24}>
            <Form.Item
              label="Mobile Number"
              name="mobilenumber"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please Enter Your Mobile Number!",
                },
              ]}
            >
              <Input allowClear placeHolder="Enter Your Mobile Number" />
            </Form.Item>
          </Col>
          <Form.Item>
            <button
              style={{
                color: "#fff",
                backgroundColor: "#EF4869",
                border: 0,
                borderRadius: "4px",
                padding: "12px 16px",
                minWidth: "150px",
                margin:"10px 0 10px 8px",
              }}
            >
              BOOK NOW
            </button>
          </Form.Item>
        </Row>
      </Form>
    </div>
  );
};
export default Contactinfo;
