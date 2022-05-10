import React from "react";
import "../App.css";
import { Button } from "antd";

const Card = ({ cardImg, cardName, price, kiloMeter }) => {
  return (
    <div className="carModel">
      <img src={cardImg} height="150px" width="200px" alt="Cars"></img>
      <p className="carName"> {cardName} </p>
      <div className="priceDetails">
        <p className="carPrize2">₹{price}</p>
        <p className="dateTextStyle">{kiloMeter}</p>
      </div>
      <div className="carButton">
        <>
          <Button type="primary" style={{borderRadius:"6px"}}>SELECT CAR</Button>
        </>
      </div>
    </div>
  );
};

export default Card;
