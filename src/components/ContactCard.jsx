import '../styles/ContactCard.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e2r5379', 'template_wkjsbma', form.current, {
        publicKey: 'Ww7FUNfGcLG8FrP34',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <header>Contact Me</header>
    <div className="contactCard">
        <h3>email: jporter252@gmail.com</h3>
        <h4>Send me a message below.<i class="fa-solid fa-hand-point-down"></i></h4>
    <form ref={form} onSubmit={sendEmail}>
    <div className="formContent">
      <label>Name:</label>
      <input type="text" name="user_name" />
    </div>
    <div className="formContent">
      <label>Email:</label>
      <input type="email" name="user_email" />
    </div>
    <div className="formContent">
      <label>Message:</label>
      <textarea className="content" name="message" />
    </div>
    <div className="emailBtn">
      <input type="submit" value="Send" />
    </div>
    </form>
    </div>
    </>
  );
};

export default Contact;
