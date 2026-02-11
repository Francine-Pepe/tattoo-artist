import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    alert("Message sent!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Let's Create Something Unique</h2>
          <p>
            Get in touch to book your tattoo or ask any questions. I’m happy to
            chat.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
