import React from "react";
import Header from "../components/Header";

const Container = ({ children }) => 
    <div className="main">
        <Header/>
        <div className="container">
            {children}
        </div>
    </div>

export default Container;