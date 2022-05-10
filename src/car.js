import React, { useState, useEffect } from "react";
import { Button } from "antd";
import eritga from "./Images/Eritga.jpg";
import "./App.css";
import { useLocation, Link } from "react-router-dom";
import Moment from "react-moment";
import baleno from "./Images/BALENO.jpg";
import amaze from "./Images/Amaze.png";
import wr from "./Images/Wr.png";
import innova from "./Images/Innova.png";
import brezza from "./Images/Brezza.png";
import swift from "./Images/Swift.png";
import Card from "./components/car-card";

const cars = {
  MADURAI: [
    {
      carId: "1",
      carName: "SUZUKI BALENO",
      carImage: baleno,
      carPrice: "9500",
      kilometer: "462 KM",
    },
    {
      carId: "2",
      carName: "SUZUKI SWIFT",
      carImage: swift,
      carPrice: "9000",
      kilometer: "462 KM",
    },
    {
      carId: "3",
      carName: "SUZUKI ERITGA",
      carImage: eritga,
      carPrice: "10000",
      kilometer: "462 KM",
    },
  ],
  TRICHY: [
    {
      carId: "1",
      carName: "HONDA AMAZE",
      carImage: amaze,
      carPrice: "7000",
      kilometer: "330 KM",
    },
    {
      carId: "2",
      carName: "HONDA WR-V",
      carImage: wr,
      carPrice: "7500",
      kilometer: "330 KM",
    },
    {
      carId: "3",
      carName: "INNOVA CRYSTA",
      carImage: innova,
      carPrice: "8500",
      kilometer: "330 KM",
    },
  ],
  COIMBATORE: [
    {
      carId: "1",
      carName: "SUZUKI BREZZA",
      carImage: brezza,
      carPrice: "13000",
      kilometer: "505 KM",
    },
    {
      carId: "2",
      carName: "SUZUKI BALENO",
      carImage: baleno,
      carPrice: "11000",
      kilometer: "505 KM",
    },
    {
      carId: "3",
      carName: "HONDA AMAZE",
      carImage: amaze,
      carPrice: "12000",
      kilometer: "505 KM",
    },
  ],
  SALEM: [
    {
      carId: "1",
      carName: "HONDA AMAZE",
      carImage: amaze,
      carPrice: "7000",
      kilometer: "345 KM",
    },
    {
      carId: "2",
      carName: "HONDA WR-V",
      carImage: wr,
      carPrice: "7500",
      kilometer: "345 KM",
    },
    {
      carId: "3",
      carName: "INNOVA CRYSTA",
      carImage: innova,
      carPrice: "8500",
      kilometer: "345 KM",
    },
  ],
};
 
  function Car() {
    const { state } = useLocation();
    
    console.log("choosedate", state.choosedate);
    console.log("choosetime", state.choosetime);
    console.log("value", state.value);
    console.log("fromAddress", state.fromAddress);
    console.log("toAddress", state.toAddress);
    
  return (
    <>
      <div className="booking">
        <div className="carPage">
          <div className="carHeader">
            <div className="place">
              <p style={{fontSize:"15px",fontWeight:400}}>
                {" "}
                <Link to="/">HOME</Link> {">"} SelectCar
              </p>
              <p className="dateTextStyle">
                PICKUP:<span style={{fontWeight:400}}>{state.fromAddress}
                {">"}
                {state.toAddress}{">"}{state.fromAddress}</span>
              </p>
              <p className="dateTextStyle">TRIP:<span style={{fontWeight:400}}>{state.value}</span></p>
            </div>
            <div style={{display:"flex",alignItems:"flex-end"}}>
              <p className="dateTextStyle" style={{marginLeft:"40px"}}>
               PICK DATE: <span style={{fontWeight:400}}><Moment format="DD/MM/YYYY">{state.choosedate}</Moment>{" "}
             </span> </p>
              {
                state.value === "ROUND_TRIP" && (
                  <p className="dateTextStyle" style={{marginLeft:"20px"}}>
                    RETURN DATE:<span style={{fontWeight:400}}> <Moment format="DD/MM/YYYY">{state.returndate}</Moment>{" "}
               </span>   </p>
                )
              }
              <p className="dateTextStyle" style={{marginLeft:"20px"}}>
               PICK TIME:<span style={{fontWeight:400}}> <Moment format="h:mm:ss a">{state.choosetime}</Moment>{" "}
            </span>  </p>
            </div>
          </div>
          <div className="carType">
          {/* {Users.map((item, i) => {
                  return<li key={i}>{item.name}</li>
             })} */}
            {cars[state.toAddress].map((data) => {
              return (
                // <>
                // <div className="carModel">
                //   <img
                //     src={data.carImage}
                //     height="150px"
                //     width="300px"
                //     alt="Cars"
                //   ></img>
                //   <p className="carName"> {data.carName} </p>
                //   <div className="priceDetails">
                //     <p className="carPrize2">₹{data.carPrice}</p>
                //     <p className="dateTextStyle">{data.kilometer}</p>
                //   </div>
                //   <div className="carButton">
                //     <>
                //       <Button type="primary">SELECT CAR</Button>
                //     </>
                //   </div>
                // </div>

                <Card cardImg={data.carImage} cardName={data.carName} price={data.carPrice} kiloMeter={data.kilometer}/>
            
                );
            })}
          </div>
        </div>
      </div>
    
    </>
    // <>
    //   <div>
    //     {/* <button onClick={trigger}  >OK</button> */}
    //     {Users.map((data) => {
    //       return (
    //         <>
    //         <div style={{backgroundColor:"#ffff",borderRadius:10,boxShadow:"1px 1px 1px 2px grey",width:400}}>
    //           <p>id:{data.id}</p>
    //           <p>{data.name}</p>
    //           <p>{data.phone}</p>
    //           <p>{data.username}</p>
    //           <p>{data.website}</p>
    //           </div>
    //         </>
    //       );
    //     })}
    //   </div>

    // </>
  );
}
export default Car;
