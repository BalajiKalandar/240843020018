import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Login from "./Components/Login";
import ProductList from "./Components/ProductList";
import CompanyDashboard from "./Components/CompanyDashboard/CompDash";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/CompanyDashboard" element={<CompanyDashboard />} /> */}
        <Route path="/" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
