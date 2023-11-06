import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

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
                console.log("Email sent successfully!", response);

                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });

                setEmailSent(true);
                setPopupVisible(true);

                setTimeout(() => {
                    setPopupVisible(false);
                }, 3000);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };
    return (
        <div className="container content-container section">
            <div className="contact-page-container">
                <h1 className="contact-title">CONTACT US</h1>
                <p>
                    Whether you're curious about the free trial, the prices, or
                    the new features, we're ready to answer any of your
                    questions. Please fill out the form below.
                </p>
                <hr className="contact__line" />
                <h2>We’d love to hear from you</h2>
                <form onSubmit={handleSubmit}>
                    <div className="contact__form-group">
                        <input
                            placeholder=" Your name"
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
                            placeholder=" Your email"
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
                            placeholder=" Messages"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="contact__form-input"
                        ></textarea>
                    </div>
                    <div className="contact__submit-Btn">
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
                {popupVisible && (
                    <div className="contact__message-popup">
                        {emailSent
                            ? "Email sent successfully!"
                            : "An error occurred. Please try again later."}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;