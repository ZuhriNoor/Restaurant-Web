import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <SideNav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/menu" element={} />
        <Route path="/contact" element={} />
        <Route path="/reservation" element={} />
        <Route path="/gallery" element={} /> */}
      </Routes>

    </>
  );
}
