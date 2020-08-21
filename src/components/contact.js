import React from "react";

export default function ContactForm() {
    return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form">
        <div>
          <label>Email Me:</label>
          <a href="mailto:deannapi.mart@gmail.com">deannapi.mart@gmail.com</a>
        </div>
        <div>
          <label>Phone: </label>
          <a href="tel:14324259101">(m) 432.425.9101</a>
        </div>
      </form>
    </section>
  );
};