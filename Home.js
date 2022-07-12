import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import App from "./App";
import GetIn from "./Navbar";
import Info from "./Informacion";

const  First= () => {
    return (
        <div>
            <GetIn />
            <BrowserRouter>
                <Routes>
                    <Route path="/pokemons" element={<App />}></Route>
                    <Route path="/info" element={<Info />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default First;