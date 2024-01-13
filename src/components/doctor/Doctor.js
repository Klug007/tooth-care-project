import React from "react";
import "./Doctor.css";
import doctor from "../../assets/doctor.png";
import { ReactComponent as Check } from "../../assets/check.svg";

function Doctor() {
    return (
        <div className="doctor">
            <div className="image">
                <div className="blue-back"></div>
            </div>
            <div className="doctor_descrip">
                <div>
                    <h3>
                        <span>MEET</span>
                    </h3>
                    <h2>Dr.Fadi Hasan</h2>
                    <h4>
                        <span>DDS, MSD, DABP </span>
                    </h4>
                </div>
                <p>
                    Dr. Fadi Hasan is an award-winning McLean periodontist
                    specializing in implant dentistry, periodontal treatment,
                    and interdisciplinary care. With a commitment to superior
                    clinical results, Dr. Hasan offers patients a compassionate
                    approach and world-class care.
                </p>
                <ul>
                    <li>
                        <Check />
                        <p>
                            Highlighted as a top periodontist by peer-nominated
                            Washingtonian magazine.
                        </p>
                    </li>
                    <li>
                        <Check />
                        <p>
                            A recognized leader in periodontal and implant
                            dentistry with extensive clinical experience.
                        </p>
                    </li>
                    <li>
                        <Check />
                        <p>
                            Offers an elite patient experience focused on
                            naturally esthetic results and gentle patient care.
                        </p>
                    </li>
                </ul>
                <div>
                    <button className="btn-appoint">
                        <a href="/learn">Learn More</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Doctor;
