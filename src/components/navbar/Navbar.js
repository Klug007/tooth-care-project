import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Menu } from "../../assets/icon-menu.svg";
import Close from "../../assets/close.png";
import "./Navbar.css";
import Menuitems from "./Menuitems";

function Navbar() {
    const [open, setOpen] = useState(false);
    const toggleDropdown = () => {
        setOpen(!open);
    };
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <a href="/">
                    <Logo />
                </a>
            </div>
            <div className="navbar-appointment">
                <button className="btn-appoint none">
                    <a href="./appointment">Reaquest Appointment</a>
                </button>
                <div className="navbar-menu">
                    <button onClick={toggleDropdown}>
                        {!open?(<Menu /> ):(<img src={Close}alt="image"className="close-icon"/>)}
                    </button>
                    <div
                        className="background_effect"
                        style={open? { height: "100vh"}: { height: "100vh", width: "0" }
                        }
                    >
                        <div
                            className="menu-bar"
                            style={open? { display: "block" }: { display: "none" }}
                        >
                            <Menuitems />
                            <button
                                className="menu-appoint"
                                style={ open? { display: "block" }: { display: "none" }}
                            >
                                <a href="./appointment">Reaquest Appointment</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
