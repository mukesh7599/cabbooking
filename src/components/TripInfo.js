import React, { useState } from "react";
import "./TripInfo.css";
import { Form, Radio, Input, Row, Col, DatePicker, TimePicker } from "antd";
import moment from "moment";
import { CalendarOutlined } from "@ant-design/icons";

const TripInfo = () => {
  const [chooseTime, setChooseTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [customerDetails, setCustomerDetails] = useState({
    getTrip: "One_Way_Trip",
  });

  function getDisabledHours() {
    console.log(currentDate
      // "Time",
      // new Date().toLocaleTimeString("en-IN", {
      //   hour: "2-digit",
      //   minute: "2-digit",
      // })
    );
    var hours = [];
    if (currentDate === new Date().toISOString().substring(0, 10)) {
      for (var i = 0; i < moment().hour(); i++) {
        hours.push(i);
      }
      return hours;
    }
    return hours;
  }

  function getDisabledMinutes() {
    var minutes = [];
    if (currentDate === new Date().toISOString().substring(0, 10)) {
      for (var i = 0; i < moment().minute(); i++) {
        minutes.push(i);
      }
      return minutes;
    }
    return minutes;
  }
  function onSelect(time) {
    console.log(time._d);
    setChooseTime(time._d);
  }
function submitHandler(e){
console.log(e)
}
  function disabledDate(current) {
    return current && current < moment().subtract(1, "days");
  }
  const tripChange = (e) => {
    console.log("customer",customerDetails);
    setCustomerDetails((prev) => {
        return {
        ...prev,
        getTrip: e.target.value,
        
      };
    });
  };
  return (
    <div className="userContainer">
      <div className="tripRadio">
        <Radio.Group onChange={tripChange} value={customerDetails.getTrip}>
          <Radio value={"One_Way_Trip"}>One Way-Trip</Radio>
          <Radio value={"Round_Trip"}>Round Trip</Radio>
        </Radio.Group>
      </div>
      <div className="get-User-Input">
        <Form colon={false} labelCol={{ span: 3 }} wrapperCol={{ span: 20 }} onFinish={submitHandler}>
          <Form.Item
            label="From"
            name="from"
            className="form-item"
            rules={[{ required: true, message: "Please enter your location!" }]}
          >
            <Input className="route-input" allowClear />
          </Form.Item>

          <Form.Item
            className="form-to-item"
            label="To"
            name="to"
            rules={[
              { required: true, message: "Please enter your destination!" },
            ]}
          >
            <Input className="route-input" allowClear />
          </Form.Item>
          <Row gutter={[8]}>
            <Col span={12}>
              <Form.Item name="radio-group">
                <Radio.Group defaultValue={"A/C"} style={{ marginTop: "20px" }}>
                  <Radio value="A/C">A/C</Radio>
                  <Radio value="Non A/C">Non A/C</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                className="form-to-item"
                label="No.of People"
                name="no.of people"
                labelCol={{ span: 24 }}
                
                rules={[
                  {
                    required: true,
                    message: "Please enter No of People!",
                  },
                ]}
              >
                <Input className="route-input" style={{width:"100%"}} allowClear />
              </Form.Item>
            </Col>
            
             {customerDetails.getTrip === "One_Way_Trip" ?
             <>
             <Col className="gutter-row" span={12}>
             <Form.Item
               label="Pickup On"
               name="pickupon"
               className="form-to-item"
               labelCol={{ span: 24 }}
               rules={[
                 {
                   required: true,
                   message: "Please enter Pickup Date!",
                 },
               ]}
             >
               <DatePicker
                 style={{
                   width: "100%",
                   backgroundColor: "#F6F7F8",
                   border: 0,
                   borderRadius: "4px",
                 }}
                 format={"DD-MM-YYYY"}
                 disabledDate={disabledDate}
                 className="route-input"
                 suffixIcon={<CalendarOutlined />}
                 onChange={(date, string) => {
                   setCurrentDate(string);
                 }}
               />
             </Form.Item>
           </Col>
           <Col className="gutter-row" span={12}>
             <Form.Item
               label="Pickup At"
               name="pickupat"
               className="form-to-item"
               labelCol={{ span: 24 }}
               rules={[
                 {
                   required: true,
                   message: "Please enter Pickup Time!",
                 },
               ]}
             >
               <TimePicker
                 style={{
                   width: "100%",
                   backgroundColor: "#F6F7F8",
                   border: 0,
                   borderRadius: "4px",
                 }}
                 disabled={currentDate ? false : true}
                 use12Hours={true}
                 //   initialValues={new Date().toLocaleTimeString("en-IN", {hour:'2-digit', minute:'2-digit'})}
                 //   defaultValue={`${new Date().toLocaleTimeString("en-IN", {hour:'2-digit', minute:'2-digit'})}`}
                 format="HH:mm a"
                 disabledHours={getDisabledHours}
                 disabledMinutes={getDisabledMinutes}
                 onSelect={onSelect}
               />
             </Form.Item>
           </Col>
           </>
           :
           <>
           <Col className="gutter-row" xs={{span:12}} sm={{span:12}} md={{span:8}}  >
           <Form.Item
             label="Pickup On"
             name="pickupon"
             className="form-to-item"
             labelCol={{ span: 24 }}
             rules={[
               {
                 required: true,
                 message: "Please enter Pickup Date!",
               },
             ]}
           >
             <DatePicker
               style={{
                 width: "100%",
                 backgroundColor: "#F6F7F8",
                 border: 0,
                 borderRadius: "4px",
               }}
               format={"DD-MM-YYYY"}
               disabledDate={disabledDate}
               className="route-input"
               suffixIcon={<CalendarOutlined />}
               onChange={(date, string) => {
                 setCurrentDate(string);
               }}
             />
           </Form.Item>
         </Col>
         <Col className="gutter-row" xs={{span:12}} sm={{span:12}} md={{span:8}}>
           <Form.Item
             label="Pickup At"
             name="pickupat"
             className="form-to-item"
             labelCol={{ span: 24 }}
             rules={[
               {
                 required: true,
                 message: "Please enter Pickup Time!",
               },
             ]}
           >
             <TimePicker
               style={{
                 width: "100%",
                 backgroundColor: "#F6F7F8",
                 border: 0,
                 borderRadius: "4px",
               }}
               disabled={currentDate ? false : true}
               use12Hours={true}
               //   initialValues={new Date().toLocaleTimeString("en-IN", {hour:'2-digit', minute:'2-digit'})}
               //   defaultValue={`${new Date().toLocaleTimeString("en-IN", {hour:'2-digit', minute:'2-digit'})}`}
               format="HH:mm a"
               disabledHours={getDisabledHours}
               disabledMinutes={getDisabledMinutes}
               onSelect={onSelect}
             />
           </Form.Item>
         </Col>
         <Col className="gutter-row" xs={{span:12}} sm={{span:12}} md={{span:8}}>
           <Form.Item
             label="Return On"
             name="returnon"
             className="form-to-item"
             labelCol={{ span: 24 }}
             rules={[
               {
                 required: true,
                 message: "Please enter Return Date!",
               },
             ]}
           >
             <DatePicker
               style={{
                 width: "100%",
                 backgroundColor: "#F6F7F8",
                 border: 0,
                 borderRadius: "4px",
               }}
               format={"DD-MM-YYYY"}
               disabledDate={disabledDate}
               className="route-input"
               suffixIcon={<CalendarOutlined />}
               onChange={(date, string) => {
                 setCurrentDate(string);
               }}
             />
           </Form.Item>
         </Col>
         </>
           } 
            <Col span={24}>
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
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default TripInfo;
