import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import airport from "./Images/Airport.png";
import { Radio } from "antd";
import { GoLocation } from "react-icons/go";
import { MdOutlineCardTravel } from "react-icons/md";
import { padding, width } from "@mui/system";
import { IoMdAirplane } from "react-icons/io";

import "react-datepicker/dist/react-datepicker.css";
import { TimePicker } from "antd";
import "antd/dist/antd.css";
import { Input } from "antd";
import { DatePicker, Space } from "antd";
import { Button } from "antd";
import car from "./car.js";
import {
  BrowserRouter as Router,
  Route,
  // useRouteMatch,
  Link
} from "react-router-dom";

function App() {
  // let match = useRouteMatch;
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  function onDate(date, dateString) {
    console.log(date, dateString);
  }

  const [selectDate, setSelectDate] = useState(new Date());
  function onSelect(time, timeString) {
    console.log(time, timeString);
  }

  return (
    <>
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
              <Radio value={1} style={{ fontSize: "17px" }}>
                ONE WAY
              </Radio>
              <Radio
                value={2}
                style={{ fontSize: "17px" }}
                className="radioButton"
              >
                ROUND TRIP
              </Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="tripDetails">
          <div className="pickUp">
            <p className="getInfo">FROM</p>
            <div className="pickUpTextStyle">
              {" "}
              <Input placeholder="Enter Your Pickup Location" />
            </div>
          </div>
          <div className="pickUp">
            <p className="getInfo">TO</p>
            <div className="dropTextStyle">
              {" "}
              <Input placeholder="Enter Your Drop Address" />
            </div>
          </div>

          <div className="travelTime">
            <div className="pickUpDate">
              <div className="getDate">
                <p className="dateTextStyle">PICK UP</p>
                <DatePicker onChange={onChange} className="dateTime" />
              </div>
              <div className="getTime">
                <p className="dateTextStyle">PICK UP</p>
                <>
                  <TimePicker
                    use12Hours
                    format="h:mm a"
                    onSelect={onChange}
                    className="dateTime"
                  />
                </>
              </div>
            </div>
          </div>
          <div className="selectCar">
            <Router>
              <>
                {/* <Route path="/car" component={car}> */}
                <Button type="primary">
                  {" "}
                  <Link to="/Car">About</Link>
                  {/* <Link to={`${match.url}/Car`}>Components</Link> */}
                </Button>
                {/* </Route> */}
              </>
            </Router>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
