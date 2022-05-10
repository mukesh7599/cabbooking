import React, { useState } from "react";
import "./App.css";
import { Radio } from "antd";
import { GoLocation } from "react-icons/go";
import { MdOutlineCardTravel } from "react-icons/md";
import { IoMdAirplane } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";
import { TimePicker } from "antd";
import "antd/dist/antd.css";
import { DatePicker, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { Select, Button, Input, Form } from "antd";
import moment from "moment";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const RoundTrip = ({ tripName }) => {
  var Navigation = useNavigate();
  const [choosedate, setChoosedate] = useState("");
  const [chooseTime, setChooseTime] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [value, setValue] = useState("ONE_WAY");
  const [userDetails, setUserDetails] = useState({});
  const { Option } = Select;

  function disabledDate(current) {
    return current && current < moment().subtract(1, "days");
  }

  function getDisabledHours() {
    var hours = [];
    for (var i = 0; i < moment().hour(); i++) {
      hours.push(i);
    }
    return hours;
  }

  function getDisabledMinutes() {
    var minutes = [];
    for (var i = 0; i < moment().minute(); i++) {
      minutes.push(i);
    }
    return minutes;
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
    setFromAddress(value.target.value);

    setUserDetails({
      choosedate: choosedate,
      choosetime: chooseTime,
      value: value,
      fromAddress: value.target.value,
      toAddress: toAddress,
    });
  }

  function onSwitch(value) {
    console.log(`selected ${value}`);

    setToAddress(value.target.value);
    setUserDetails({
      choosedate: choosedate,
      choosetime: chooseTime,
      value: value,
      fromAddress: setToAddress,
      toAddress: value.target.value,
    });
  }
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  function handleClick() {
    if (fromAddress == "") return alert("Select From Address");
    if (toAddress == "") return alert("Select To Address");
    if (choosedate == "") return alert("Select Pickup Date");
    if (chooseTime == "") return alert("Select Pickup Time");
    const data = {
      ...userDetails,
      value: tripName,
    };
    Navigation("/Car", { state: data });
  }

  function returnChange(date) {
    console.log(date._d);
    setReturnDate(date._d);
    setUserDetails({
      returndate: date._d,
      choosedate: choosedate,
      choosetime: chooseTime,
      value: value,
      fromAddress: fromAddress,
      toAddress: toAddress,
    });
  }
  function dateChange(date) {
    console.log(date._d);
    setChoosedate(date._d);
    setUserDetails({
      returndate: returnDate,
      choosedate: date._d,
      choosetime: chooseTime,
      value: value,
      fromAddress: fromAddress,
      toAddress: toAddress,
    });
  }
  function onSelect(time) {
    console.log(time._d);
    setChooseTime(time._d);
    setUserDetails({
      returndate: returnDate,
      choosedate: choosedate,
      choosetime: time._d,
      value: value,
      fromAddress: fromAddress,
      toAddress: toAddress,
    });
  }

  return (
    <>
      <div className="tripDetails">
        <div
          className="pickUp"
          
        >
          <p className="getInfo">FROM</p>
          <div className="pickUpTextStyle">
            {" "}
            <Input
              placeholder="Enter Your Location"
              onChange={handleChange}
              style={{ width: "350px" }}
              allowClear
            />
            {/* <Select
              showSearch
              style={{ width: 350 }}
              onChange={handleChange}
              placeholder="Enter Your Location"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              {" "}
              <Option value="CHENNAI">Chennai</Option>
            </Select> */}
          </div>
        </div>

        {/* <Select
                showSearch
                style={{ width: 350 }}
                onChange={onSwitch}
                placeholder="Enter Your Drop Location"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
                >
                {" "}
                <Option value="MADURAI">Madurai</Option>
                <Option value="TRICHY">Trichy</Option>
                <Option value="SALEM">Salem</Option>
                <Option value="COIMBATORE">Coimbatore</Option>
                </Select> */}
        {/* <Input
                      onChange={ToAddress}
                      placeholder="Enter Your Drop Address"
                    /> */}

        <div className="tripDetails">
          <div className="pickUp">
            <Form
              name="dynamic_form_nest_item"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.List initialValue={[{}]} name="users">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <p className="getInfo">TO</p>
                        <div style={{ position: "relative" }}>
                          <Input
                            placeholder="Add Your Station"
                            onChange={onSwitch}
                            style={{ width: "350px", marginLeft: "33px" }}
                        
                          />
                          {name > 0 && (
                            <MinusCircleOutlined
                              onClick={() => remove(name)}
                              style={{
                                position: "absolute",
                                top: "9px",
                                right: "30px",
                                zIndex: 1,
                              }}
                            />
                          )}
                          <button
                            disabled={toAddress==""}
                            onClick={() => add()}
                            style={{
                              marginLeft: "10px",
                              position: "absolute",
                              top: "-4px",
                              right: "2px",
                              border:0,
                              backgroundColor:"transparent",
                              zIndex: 1,
                              fontSize:"22px",
                            }}
                          >+</button>
                          
                        </div>
                      </Space>
                    ))}
                    {/* <Form.Item>
                      <Button type="primary" onClick={() => add()} style={{marginLeft:"10px"}}>
                        +
                      </Button>
                    </Form.Item> */}
                  </>
                )}
              </Form.List>
            </Form>
          </div>
        </div>
        <div className="pickUpDate" style={{ marginTop: "0px" }}>
          <div className="getDate" style={{ width: "32%" }}>
            <p
              className="dateTextStyle"
              style={{ fontWeight: 400, fontSize: "14px" }}
            >
              PICK UP
            </p>
            <DatePicker
              style={{ width: "100%" }}
              format={"DD/MM/YYYY"}
              disabledDate={disabledDate}
              onChange={dateChange}
              className="dateTime"
            />
          </div>

          <div className="getDate" style={{ width: "32%" }}>
            <p
              className="dateTextStyle"
              style={{ fontWeight: 400, fontSize: "14px" }}
            >
              RETURN
            </p>

            <DatePicker
              style={{ width: "100%" }}
              format={"DD/MM/YYYY"}
              disabledDate={disabledDate}
              onChange={returnChange}
              className="dateTime"
            />
          </div>

          <div
            className="getDate"
            style={{ width: "32%", marginRight: "10px" }}
          >
            <p
              className="dateTextStyle"
              style={{ fontWeight: 400, fontSize: "14px" }}
            >
              PICK UP AT
            </p>
            <>
              <TimePicker
                style={{ width: "100%" }}
                use12Hours
                format="h:mm "
                disabledHours={getDisabledHours}
                disabledMinutes={getDisabledMinutes}
                onSelect={onSelect}
                className="dateTime"
              />
            </>
          </div>
        </div>
        <div className="selectCar">
          <Button onClick={handleClick} style={{ fontWeight: 500 }}>
            SUBMIT
          </Button>
        </div>
      </div>
    </>
  );
};
export default RoundTrip;
