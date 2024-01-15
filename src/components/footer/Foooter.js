import React from "react";
import call from "../../assets/phone-call.png";
import calendar from "../../assets/calendar.png";
import place from "../../assets/placeholder.png";
import google from "../../assets/google-glass-logo.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import smth from "../../assets/network.png";
import "./Footer.css";

function Foooter() {
    return (
        <div className="footer">
            <div className="section-6">
                <div className="sec6-img none">
                    <img
                        src="https://sculptperio.com/wp-content/uploads/2023/07/minFront-Office-Sculpt-Center-for-Implants-and-Periodontics-McLean-VA-min.jpg"
                        alt=""
                    />
                    <img
                        src="https://sculptperio.com/wp-content/uploads/2023/07/minFront-Desk-Sculpt-Center-for-Implants-and-Periodontics-McLean-VA-min.jpg"
                        alt=""
                    />
                    <img
                        src="https://sculptperio.com/wp-content/uploads/2023/07/minDental-Chair-Sculpt-Center-for-Implants-and-Periodontics-McLean-VA-min.jpg"
                        alt=""
                    />
                </div>
                <div className="sec6-logos none">
                    <img
                        src="https://sculptperio.com/wp-content/uploads/2023/05/bbb-logo.png"
                        alt=""
                    />
                    <img
                        src="	https://sculptperio.com/wp-content/uploads/2023/05/american-board-periodontology-logo.jpg"
                        alt=""
                    />
                    <img
                        src="	https://sculptperio.com/wp-content/uploads/2023/05/american-academy-periodontology-logo.png"
                        alt=""
                    />
                    <img
                        src="	https://sculptperio.com/wp-content/uploads/2023/05/virginia-society-periodontics-logo.jpg"
                        alt=""
                    />
                    <img
                        src="https://sculptperio.com/wp-content/uploads/2023/05/academy-of-osseointegration.png"
                        alt=""
                    />
                    <img
                        src="https://sculptperio.com/wp-content/uploads/2023/07/Badge_DDS_2023.jpg"
                        alt=""
                    />
                </div>
                <div className="media-img">
                    <img
                        src="https://sculptperio.com/wp-content/uploads/2023/07/Mclean-VA-Sculpt-Center-for-Implants-and-Periodontics-Dental-Office.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div className="footer-1">
                <div className="f-item">
                    <h1>STAY IN TOUCH</h1>
                    <div className="f-ul">
                        <li>
                            <div className="map-icons">
                                <img src={place} alt="" />
                            </div>
                            <p>
                                <a href="/">
                                    8201 Greensboro Dr. Suite 702 <br /> McLean,
                                    VA, 22102 Get Directions
                                </a>
                            </p>
                        </li>
                        <li>
                            <div className="map-icons">
                                <img src={call} alt="" />
                            </div>
                            <p>
                                <a href="/">(703) 962-4119</a>
                            </p>
                        </li>
                        <li>
                            <div className="map-icons">
                                <img src={calendar} alt="" />
                            </div>
                            <p>
                                <a href="/">
                                    Monday – Thursday: <br /> 9AM – 5PM <br />{" "}
                                    Friday: 8AM – 4PM
                                </a>
                            </p>
                        </li>
                    </div>
                </div>
                <div className="f-item">
                    <h1>PRACTICE</h1>
                    <ul>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="About">New patients</a>
                        </li>
                        <li>
                            <a href="About">Contact</a>
                        </li>
                        <li>
                            <a href="About">Patient Referral</a>
                        </li>
                        <li>
                            <a href="About">Payment</a>
                        </li>
                    </ul>
                </div>
                <div className="f-item">
                    <h1>SERVICES</h1>
                    <ul>
                        <li>
                            <a href="/about">Implants</a>
                        </li>
                        <li>
                            <a href="About">Periondontics</a>
                        </li>
                        <li>
                            <a href="About">IV Sedation</a>
                        </li>
                        <li>
                            <a href="About">
                                Extractions / Bone <br /> Grafts
                            </a>
                        </li>
                        <li>
                            <a href="About">Cosmetic</a>
                        </li>
                    </ul>
                </div>
                <div className="f-item">
                    <h1>Review Us</h1>
                    <div className="f-img">
                        <img src={google} alt="" />
                        <img src={smth} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                </div>
                <div className="f-item">
                    <h1>SOCIAL MEDIA</h1>
                    <div className="f-img">
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer-2">
                <div className="none">
                    <p>© Sculpt Center for Implants & Periodontics</p>
                    <p>
                        <a href="/">Privacy Policy | Accessibility Statement</a>
                    </p>
                </div>
                <div>
                    <a href="/">
                        <img
                            src="https://sculptperio.com/wp-content/uploads/2022/11/SculptCenterLogo-white.svg"
                            alt=""
                        />
                    </a>
                </div>
                <div className="block del">
                    <p>© Sculpt Center for Implants & Periodontics</p>
                    <p>
                        <a href="/">Privacy Policy | Accessibility Statement</a>
                    </p>
                </div>
                <div>
                    <p>Dental Web Design & Marketing by :Delmain</p>
                </div>
            </div>
        </div>
    );
}

export default Foooter;
