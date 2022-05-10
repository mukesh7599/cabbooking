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
import { Select,Button,Input } from "antd";
import moment from "moment";
import RoundTrip from "./roundway";



function Car() {
  var Navigation = useNavigate();
  const [choosedate, setChoosedate] = useState("");
  const [chooseTime, setChooseTime] = useState("");
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
    console.log(`selected ${value.target.value}`);
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
    console.log(`selected ${value.target.value}`);

    setToAddress(value.target.value);
    setUserDetails({
      choosedate: choosedate,
      choosetime: chooseTime,
      value: value,
      fromAddress: setToAddress,
      toAddress: value.target.value,
    });
  }
  function handleClick() {
    // if (fromAddress == "") return alert("Select From Address");
    // if (toAddress == "") return alert("Select To Address");
    if (choosedate == "") return alert("Select Pickup Date");
    if (chooseTime == "") return alert("Select Pickup Time");
    console.log("userDetails",userDetails)
    Navigation("/Car", { state: userDetails });
  }

  function onChange(e) {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    setUserDetails({
      choosedate: choosedate,
      choosetime: chooseTime,
      value: e.target.value,
      fromAddress: setToAddress,
      toAddress: toAddress,
    });
  }
  function dateChange(date) {
    console.log(date._d);
    setChoosedate(date._d);
    setUserDetails({
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
      choosedate: choosedate,
      choosetime: time._d,
      value: value,
      fromAddress: fromAddress,
      toAddress: toAddress,
    });
  }

  return (
    <>
      <div className="page">
        <div className="pageFrame">
          <div className="travelMode">
            <div className="travel">
              {" "}
              <MdOutlineCardTravel style={{ height: 30, width: 20 }} />
              <p className="outstationTextStyle">OUTSTATION</p>
            </div>
            <div className="travel">
              <GoLocation style={{ height: "20px" }} />
              <p className="outstationTextStyle">LOCAL</p>
            </div>
            <div className="travel">
              <IoMdAirplane style={{ height: "25px", width: "25px" }} />
              <p className="outstationTextStyle">AIRPORT</p>
            </div>
          </div>
          <div className="tripType">
            <div className="radio">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={"ONE_WAY"} style={{ fontSize: "17px" }}>
                  ONE WAY
                </Radio>
                <Radio
                  value={"ROUND_TRIP"}
                  style={{ fontSize: "17px" }}
                  className="radioButton"
                >
                  ROUND TRIP
                </Radio>
              </Radio.Group>
            </div>
          </div>
          <>
            {value === "ONE_WAY" ? (
              <div className="tripDetails">
                <div className="pickUp">
                  <p className="getInfo">FROM</p>
                  <div className="pickUpTextStyle">
                    {" "}
                    <Input placeholder="Enter Your Location" onChange={handleChange} style={{width:"350px"}} allowClear/>
                    {/* <Select
                      showSearch
                      allowClear
                      style={{ minWidth:350 }}
                      onChange={handleChange}
                      placeholder="Enter Your Location"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
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
                    {/* <Input
                      onChange={FromAddress}
                      onKeyDown={onKeyDown}
                      placeholder="Enter Your Pickup Location"
                    /> */}
                  </div>
                </div>
                <div className="pickUp">
                  <p className="getInfo">TO</p>
                  <div className="dropTextStyle">
                    {" "}
                    <Input placeholder="Enter Your Drop Location" onChange={onSwitch} style={{width:"350px"}} allowClear />
                    {/* <Select
                      showSearch
                      allowClear
                      style={{ minWidth:350}}
                      onChange={onSwitch}
                      placeholder="Enter Your Drop Location"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
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
                  </div>
                </div>

                
                  <div className="pickUpDate">
                    <div className="getDate">
                      <p className="dateTextStyle"style={{fontWeight:400,fontSize:"14px"}}>PICK UP</p>
                      <DatePicker
                        format={"DD/MM/YYYY"}
                        disabledDate={disabledDate}
                        onChange={dateChange}
                        className="dateTime"
                      />
                    </div>

                    <div className="getTime">
                      <p className="dateTextStyle"style={{fontWeight:400,fontSize:"14px"}}>PICK UP AT</p>
                      <>
                        <TimePicker
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
                  <Button  onClick={handleClick} style={{fontWeight:500}}>
                    SUBMIT
                  </Button>
                </div>
              </div>
            ) : (
              <RoundTrip tripName={value}/>
            )}
          </>
        </div>
      </div>
    </>
  );
}
export default Car;
