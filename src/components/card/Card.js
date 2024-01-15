import React from "react";
import "./Card.css";
import place from "../../assets/placeholder.png";
import call from "../../assets/phone-call.png";
import calendar from "../../assets/calendar.png";
import ReactCompareImage from "react-compare-image";

function Card() {
    return (
        <div className="card">
            <section className="section-1">
                <div className="sec-main_text">
                    <h1>Specialized services.</h1>
                    <h2>Superior outcomes.</h2>
                    <p>
                        Our state-of-the-art studio provides VIP periodontal and
                        dental implant treatments. Dr. Hasan takes an
                        interdisciplinary approach, coordinating treatment with
                        a team of leading specialists to improve every aspect of
                        your health and smile.
                    </p>
                    <div className="video_play">
                        <img
                            src="	https://sculptperio.com/wp-content/uploads/2023/07/SculptCenter-video-overlay.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="sec-main_cards">
                    <div className="card-item">
                        <h5>Implants</h5>
                        <p>
                            Enjoy world-class dental implant care. Advanced
                            technology in our high-tech facility enables our
                            experienced team to deliver faster, easier, and more
                            successful implant treatment.
                        </p>
                        <div>
                            <a href="/learn">
                                <button className="btn-learn">
                                    Learn More
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="card-item">
                        <h5>Implants</h5>
                        <p>
                            Enjoy world-class dental implant care. Advanced
                            technology in our high-tech facility enables our
                            experienced team to deliver faster, easier, and more
                            successful implant treatment.
                        </p>
                        <div>
                            <a href="/learn">
                                <button className="btn-learn">
                                    Learn More
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="card-item">
                        <h5>Implants</h5>
                        <p>
                            Enjoy world-class dental implant care. Advanced
                            technology in our high-tech facility enables our
                            experienced team to deliver faster, easier, and more
                            successful implant treatment.
                        </p>
                        <div>
                            <a href="/learn">
                                <button className="btn-learn">
                                    Learn More
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="card-item">
                        <h5>Implants</h5>
                        <p>
                            Enjoy world-class dental implant care. Advanced
                            technology in our high-tech facility enables our
                            experienced team to deliver faster, easier, and more
                            successful implant treatment.
                        </p>
                        <div>
                            <a href="/learn">
                                <button className="btn-learn">
                                    Learn More
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section-2">
                <div className="section2-text">
                    <p>
                        “Dr. Hasan was incredibly thorough and clear. Not <br />
                        only is he an accomplished periodontist, but he’s <br />
                        also incredibly personable and compassionate.” <br /> —
                        Jeanne
                    </p>
                </div>
            </div>
            <div className="section-3">
                <div className="sect3-text">
                    <h3>PATIENT</h3>
                    <h2>Transformations</h2>
                </div>

                <div className="sec3-grid">
                    <ReactCompareImage
                        className="sm"
                        leftImage="https://sculptperio.com/wp-content/uploads/2023/07/00-implants-case-1-before-min.jpeg"
                        rightImage="https://sculptperio.com/wp-content/uploads/2023/07/00-implants-case-1-after-min.jpeg"
                    />
                    <ReactCompareImage
                        leftImage="https://sculptperio.com/wp-content/uploads/2023/07/00-gum-recession-case-9-before-min.jpeg"
                        rightImage="https://sculptperio.com/wp-content/uploads/2023/07/00-gum-recession-case-9-after-min.jpeg"
                    />
                    <ReactCompareImage
                        leftImage="https://sculptperio.com/wp-content/uploads/2023/07/00-gum-recession-case-6-before-min.jpeg"
                        rightImage="https://sculptperio.com/wp-content/uploads/2023/07/00-gum-recession-case-6-after-min.jpeg"
                    />
                    <ReactCompareImage
                        leftImage="https://sculptperio.com/wp-content/uploads/2023/07/00-gum-recession-case-2-before-2-min.jpeg"
                        rightImage="https://sculptperio.com/wp-content/uploads/2023/07/00-gum-recession-case-2-after-2-min.jpeg"
                    />
                    <ReactCompareImage
                        leftImage="https://sculptperio.com/wp-content/uploads/2023/07/00-gummy-smile-case-1-before-1-min.jpeg"
                        rightImage="https://sculptperio.com/wp-content/uploads/2023/07/00-gummy-smile-case-1-after-1-min.jpeg"
                    />
                </div>
            </div>
            <div className="section-4">
                <div className="sec4-text">
                    <h1>Premier Technology Solutions</h1>
                    <p>
                        Our state-of-the-art practice utilizes leading-edge
                        technologies to enable our team to deliver faster and
                        more effective treatment. Talk to us about advanced
                        tools like the Zeiss microscope, 3Shape intraoral
                        scanner, and Green CT scan for superior diagnostics and
                        treatment planning.
                    </p>
                    <a href="/learn">
                        <button className="btn-learn-2">Learn More</button>
                    </a>
                </div>
                <div className="img none">
                    <img
                        src="https://sculptperio.com/wp-content/uploads/2023/07/SculptCenter-dentaloffice.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div className="section-5">
                <div className="sec5-text">
                    <h4>
                        Sculpt Center for <br /> Implants & Periodontics
                    </h4>
                    <p>
                        Enjoy our modern, relaxing space designed to help you
                        rejuvenate and restore. We’ve carefully planned every
                        aspect of your visit to ensure a quality periodontal and
                        dental implant experience from start to finish. We
                        proudly serve patients throughout McLean, Vienna, and
                        Wolf Trap, VA.
                    </p>
                    <hr />
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
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95961.17649870568!2d69.0628752972656!3d41.26997850000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b70980cba15%3A0x565e305311f13c40!2sChilanzar%20dentistry%20near%20medical%20college!5e0!3m2!1sen!2s!4v1705140117053!5m2!1sen!2s"
                        width="620"
                        title="dentist"
                        height="550"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Card;
