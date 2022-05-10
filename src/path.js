import React from "react";
import { Routes, Route } from "react-router-dom";
import Car from "./car";
import Home from "./home";
import Main from "./main";

export default function Path() {
  return (
    <div>
      <Routes>
      {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Car" element={<Car />} />
      </Routes>
    </div>
  );
}
