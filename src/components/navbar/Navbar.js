import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Menu } from "../../assets/icon-menu.svg";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <a href="/">
                    <Logo />
                </a>
            </div>
            <div className="navbar-appointment">
                <button className="btn-appoint">
                    <a href="./appointment">Reaquest Appointment</a>
                </button>
                <div className="navbar-menu">
                    <button>
                        <Menu />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
