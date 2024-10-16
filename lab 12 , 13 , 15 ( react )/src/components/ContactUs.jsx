import React from 'react';

const ContactUs = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Contact Us</h2>
            <p>If you have any questions, feedback, or suggestions, feel free to reach out to us. We'd love to hear from you!</p>
            <form>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" name="name" style={{ width: "100%", padding: "8px" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" style={{ width: "100%", padding: "8px" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="message">Message:</label><br />
                    <textarea id="message" name="message" style={{ width: "100%", padding: "8px" }} rows="5"></textarea>
                </div>
                <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#1bb434", color: "white", border: "none" }}>Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
