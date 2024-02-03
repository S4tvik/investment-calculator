import React from "react";
import logo from './assets/investment-calculator-logo.png';
function Header(){
    return (
        <header id = "header">
        <div>
            <center>
            <img src={logo} alt="Logo"/>
            <h1>Investments Calculator</h1>
            </center>
        </div>
        </header>
    );
}
export default Header ;