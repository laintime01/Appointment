import React from "react";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Services from "../pages/Services";
import Patients from "../pages/Patients/Patients";
import PatientDetails from "../pages/Patients/PatientDetails";
import Contact from "../pages/Contact";



import { Routes, Route } from "react-router-dom";

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/patients/:id" element={<PatientDetails />} />
        <Route path="/contact" element={<Contact />} />
        
       
    </Routes>
};

export default Routers