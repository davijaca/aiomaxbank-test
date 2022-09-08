import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Deposit from "./pages/Dashboard"
import Transfer from "./pages/Transfer"
import Settings from "./pages/Settings"
import './App.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/dashboard" element={<Deposit/>}/>
                <Route path="/transfer" element={<Transfer/>}/>
                <Route path="/settings" element={<Settings/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App