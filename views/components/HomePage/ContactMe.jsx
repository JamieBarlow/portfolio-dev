import React from "react";
import Button3D from "../Button3D";

export default function ContactMe() {
  return (
    <section className="contact bg--blue text--light" id="contactMe">
      <div className="wrapper contact__wrapper">
        <div className="background-container">
          <img src="images/scribble.svg" alt="" className="background" />
        </div>
        <div className="contact__title">
          <h2 className="fw--medium">Contact</h2>
        </div>
        <div className="contact__description">
          <p>
            I would love to hear from you - please fill in the form, and I’ll
            get back to you as soon as possible.
          </p>
        </div>
        <form className="contact__form" action="/email" method="POST">
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              className="contact__input"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="contact__field middle">
            <label htmlFor="email">Email</label>
            <input
              className="contact__input"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="contact__field message__field middle">
            <label htmlFor="message" id="message">
              Message
            </label>
            <textarea
              className="contact__input messageField"
              id="message"
              name="message"
              rows="10"
              cols="80"
              placeholder="Say hello"
            ></textarea>
          </div>
          <div className="contact__submit">
            <Button3D
              text="Send Message"
              size="fs--h5"
              type="submit"
              icon={<i className="fa-regular fa-paper-plane"></i>}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
