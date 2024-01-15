import React from "react";
import "./Contact.css";
import place from "../../assets/placeholder.png";
import call from "../../assets/phone-call.png";
import calendar from "../../assets/calendar.png";
import Navbar from "../../components/navbar/Navbar";
import Foooter from "../../components/footer/Foooter";

function Contact() {
    return (
        <div className="contact" onSubmit={'./'}>
            <Navbar />
            <div className="contact-img">
                <div className="img-text">
                    <h1>Contact Sculpt Center for Implants & Periodontics</h1>
                    <p>We look forward to hearing from you!</p>
                </div>
            </div>
            <div className="book-appoint">
                <div className="address">
                    <h1>Our Studio</h1>
                    <div className="map-info">
                        <ul>
                            <li>
                                <div className="map-icons">
                                    <img src={place} alt="" />
                                </div>
                                <p>
                                    <a href="/">
                                        8201 Greensboro Dr. Suite 702 <br />{" "}
                                        McLean, VA, 22102 <br /> Get Directions
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
                                        Monday – Thursday: 9AM – 5PM <br />{" "}
                                        Friday: 8AM – 4PM
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <form className="book">
                    <label htmlFor="name">
                        Name <span className="star">*</span>
                    </label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="email">
                        Email <span className="star">*</span>
                    </label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="phone">
                        Phone <span className="star">*</span>
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        size={9}
                        minLength={9}
                        maxLength={9}
                    />
                    <label htmlFor="doctor">
                        Referring Doctor Name<span className="star">*</span>
                    </label>
                    <input type="text" name="doctor" id="doctor" />
                    <label htmlFor="age">Date of Birth</label>
                    <input
                        type="date"
                        name="age"
                        id="age"
                        placeholder="mm/dd/yyyy"
                    />
                    <label htmlFor="call">
                        Would you like us to call the patient?
                    </label>
                    <div>
                        <input
                            type="checkbox"
                            id="coding"
                            name="call"
                            value="yes"
                        />
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="music"
                            name="call"
                            value="no"
                        />
                        <label for="no">No</label>
                    </div>
                    <label htmlFor="call">
                        Exam Type ? <span className="star">*</span>
                    </label>
                    <div>
                        <input
                            type="checkbox"
                            id="coding"
                            name="call"
                            value="limitted"
                        />
                        <label for="limitted">Litmites Form</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="music"
                            name="call"
                            value="full"
                        />
                        <label for="full">Full Mouth Exam</label>
                    </div>
                    <label htmlFor="call">
                        Would you like the doctor to call to discuss before the
                        consultation? <span className="star">*</span>
                    </label>
                    <div>
                        <input
                            type="checkbox"
                            id="coding"
                            name="call"
                            value="yes"
                        />
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="music"
                            name="call"
                            value="no"
                        />
                        <label for="no">No</label>
                    </div>
                    <label htmlFor="message">
                        Message <span className="star">*</span>
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                    ></textarea>
                    <div className="submit">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            <div className="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95961.17649870568!2d69.0628752972656!3d41.26997850000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b70980cba15%3A0x565e305311f13c40!2sChilanzar%20dentistry%20near%20medical%20college!5e0!3m2!1sen!2s!4v1705140117053!5m2!1sen!2s"
                    width="100%"
                    title="dentist"
                    height="100%"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <Foooter />
        </div>
    );
}

export default Contact;
