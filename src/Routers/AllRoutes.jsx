import React from "react";
import { Routes, Route } from "react-router-dom";
import Myportfolio from "../components/Myportfolio";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Myportfolio />} />
    </Routes>
  );
};

export default AllRoutes;
