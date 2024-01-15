import React from "react";
import "./Main.css";

function Main() {
    return (
        <div className="main">
            <div className="section-main">
                <p>THE MCLEAN PERIODONTIST</p>
                <h1>Your Smile Deserves Our Highest Attention</h1>
                <div>
                    <a href="/contact">
                        <button className="btn-appoint">
                            Request Appointment
                        </button>
                    </a>
                    <a href="703 952-4149">
                        <button className="btn-appoint">
                            Call (703) 962-4119
                        </button>
                    </a>
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
