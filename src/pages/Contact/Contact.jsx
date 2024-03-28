import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import EmailSent from "../../components/overlays/EmailSent/EmailSent";
import default_contact_image from "/contact.svg";
import alternate_contact_image from "/alternate.svg";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [emailSent, setEmailSent] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_m1qqp2h",
                "template_7mozf0d",
                {
                    to_email: "musictaste.me@gmailcom",
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                "f79rWBMGDwfilR9HA"
            )
            .then((response) => {
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });

                setEmailSent(true);
                setPopupVisible(true);

                setTimeout(() => {
                    setPopupVisible(false);
                }, 5000);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };

    const handleCloseSuccess = () => {
        setEmailSent(false);
    };

    return (
        <div className="container content-container section">
            <div className="contact-page-container">
                <h1 className="contact-title">
                    <span className="contact-highlight">Contact</span>{" "}
                    <span className="us-highlight">us</span>
                </h1>
                <p className="contact-description">
                    Whether you're curious about the new features, we're ready
                    to answer any of your questions.
                    <br className="break" /> Please fill out the form below.
                </p>

                <div className="contact__form-group">
                    <div className="contact-image">
                        <img
                            src={default_contact_image}
                            alt="Default Contact"
                            className="default-image"
                        />
                        <img
                            src={alternate_contact_image}
                            alt="Alternate Contact"
                            className="alternate-image"
                        />
                    </div>

                    <form
                        className="contact__form-wrapper"
                        onSubmit={handleSubmit}
                    >
                        <h1 className="form-heading">
                            <span className="Getin-highlight">Get in</span>{" "}
                            <span className="touch-highlight">touch</span>
                        </h1>
                        <p className="form-description">
                            You can reach us anytime
                        </p>
                        <div className="contact__form-group">
                            <input
                                placeholder=" Your name..."
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="contact__form-input"
                            />
                        </div>
                        <div className="contact__form-group">
                            <input
                                placeholder=" Your email..."
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="contact__form-input"
                            />
                        </div>
                        <div className="contact__form-group">
                            <textarea
                                placeholder=" Your message..."
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="contact__form-input"
                            ></textarea>
                        </div>

                        <button className="contact__submit-Btn" type="submit">
                            SUBMIT
                        </button>
                    </form>

                    {popupVisible && (
                        <>
                            {emailSent && (
                                <EmailSent onClose={handleCloseSuccess} />
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
