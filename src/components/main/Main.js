import React from "react";
import "./Main.css";

function Main() {
    return (
        <div className="main">
            <div className="section-main">
                <p>THE MCLEAN PERIODONTIST</p>
                <h1>Your Smile Deserves Our Highest Attention</h1>
                <div>
                    <button className="btn-appoint">
                        <a href="/">Request Appointment</a>
                    </button>
                    <button className="btn-appoint">
                        <a href="/">Call (703) 962-4119</a>
                    </button>
                </div>
            </div>
            <div className="video-container">
                <video autoPlay loop className="video">
                    <source
                        src="https://sculptperio.com/wp-content/uploads/2023/12/Sculpt-Center.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>
    );
}

export default Main;
