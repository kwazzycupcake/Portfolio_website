import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
import cake from './cake.png';

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  // null | "sent" | "error" — shows the pop-up on top of the postcard
  const [result, setResult] = useState(null);
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Postcard drops onto the page the first time it scrolls into view
  useEffect(() => {
    const el = cardRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        'service_0msie7k', // Email.js service ID
        'template_utk3bxv', // Email.js template ID
        {
          ...formDetails, // {{name}}, {{email}}, {{message}}
          // the same details under the names EmailJS templates usually use,
          // so {{reply_to}} / {{from_email}} work and "Reply" goes to the visitor
          from_name: formDetails.name,
          from_email: formDetails.email,
          reply_to: formDetails.email,
        },
        '6FCAW8n3Y5RsghDUI' // Email.js public key
      )
      .then(
        () => {
          setResult("sent");
          setFormDetails({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Failed to send message:', error);
          // keep what they wrote so they can just try again
          setResult("error");
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <div className="contact-parent">
      <h2 className="contact-heading reveal-heading">
        Reach out to <span className="contact-hl hl-swipe">me!</span>
      </h2>

      <form className={`postcard ${visible ? "visible" : ""}`} ref={cardRef} onSubmit={handleSubmit}>
        <span className="postcard-tape left" aria-hidden="true"></span>
        <span className="postcard-tape right" aria-hidden="true"></span>

        {/* Left side: the message, written on lined paper */}
        <div className="postcard-message">
          <label htmlFor="message">Your message</label>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Tell me what brings you here..."
            value={formDetails.message}
            onChange={handleChange}
          />
        </div>

        {/* Right side: stamp + address lines */}
        <div className="postcard-address">
          <div className="postcard-stamp">
            <img src={cake} alt="" />
          </div>
          <div className="postcard-to">To: Himanshi Prakash</div>

          <div className="postcard-field">
            <label htmlFor="name">From</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your name"
              value={formDetails.name}
              onChange={handleChange}
            />
          </div>

          <div className="postcard-field">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="name@example.com"
              value={formDetails.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Pop-up shown on top of the postcard after sending */}
        {result && (
          <div className={`postcard-popup ${result}`} role="status" aria-live="polite">
            <button
              type="button"
              className="popup-close"
              aria-label="Close"
              onClick={() => setResult(null)}
            >
              ×
            </button>
            {result === "sent" && (
              <div className="popup-confetti" aria-hidden="true">
                {Array.from({ length: 14 }).map((_, i) => (
                  <i key={i} style={{ "--i": i }}></i>
                ))}
              </div>
            )}
            <div className="popup-stamp" aria-hidden="true">
              {result === "sent" ? (
                <>
                  <span>SENT</span>
                  <b>✓</b>
                </>
              ) : (
                <>
                  <span>RETURNED</span>
                  <b>!</b>
                </>
              )}
            </div>
            <h3>{result === "sent" ? "Postcard sent!" : "Oops, that didn't go through"}</h3>
            <p>
              {result === "sent"
                ? "Thank you for reaching out! I'll get back to you soon."
                : "Something went wrong while sending. Your message is still here, so please try again in a bit."}
            </p>
            <button type="button" className="submit-button" onClick={() => setResult(null)}>
              {result === "sent" ? "Write another ✎" : "Try again"}
            </button>
          </div>
        )}

        <div className="postcard-send">
          <button type="submit" className="submit-button" disabled={sending}>
            {sending ? "Posting..." : "Post it ✉"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
