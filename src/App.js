import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Products,
  Profile,
  Login,
  SignUp,
  Contact,
} from "./Pages/index";
import Navbar from "./Components/Navbar";
import AddProduct from "./Components/AddProduct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}>
          <Route path="addProduct" element={<AddProduct />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
