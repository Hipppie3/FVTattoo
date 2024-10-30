import React from 'react';
import './Contact.css'; // Import your custom styles

function Contact() {
  return (
    <div className='contact-container'>
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <hr className="contact-divider" />
      <p className="contact-description">Send us a note and we'll be in touch shortly!</p>

      <form className="contact-form">
        <div className="form-group">
          <input type="text" id="name" name="name" placeholder="NAME" required />
        </div>

        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="EMAIL" required />
        </div>

        <div className="form-group">
          <input type="tel" id="phone" name="phone" placeholder="PHONE" required />
        </div>

        <div className="form-group">
          <textarea id="message" name="message" rows="5" placeholder="MESSAGE" required />
        </div>

        <div className="form-group">
          <input type="file" id="file-upload" name="file-upload" accept="image/*" multiple />
        </div>

        <button type="submit" className="submit-button">SEND</button>
      </form>
    </div>
    </div>
  );
}

export default Contact;
