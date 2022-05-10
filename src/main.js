import React from "react";
import "./main.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TripInfo from "./components/TripInfo";
import Contactinfo from "./components/Contactinfo";

function CabBooking() {
  const [tabKey, setTabKey] = React.useState(0);
  const tabChange = (_, v) => {
    setTabKey(v);
  };
  return (
    <div className="mainContainer">
      <div className="content">
        <div className="leftNav">
          <p className="titleText">
            As the world evolves, So do our creations.
          </p>
          <p className="DescriptionText">
            We are a organized creative consultancy. We combine design and
            techhnology into a unified discipline powerful enough.
          </p>
          <button className="contactButton">Contact us</button>
        </div>
        <div className="rightNav">
          <div className="titileInfo">
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={tabKey}
                onChange={tabChange}
                aria-label="basic tabs example"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Tab
                  className="trip-Info-Title-Text"
                  label="Trip Info"
                  value={0}
                />
                <Tab
                  className="contact-Info-Title-Text"
                  label="Contact Info"
                  value={1}
                />
              </Tabs>

              {tabKey === 0 && <div className="tripInfo"><TripInfo /></div>}
              {tabKey === 1 && <div className="contactInfo"><Contactinfo /></div>}
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CabBooking;
