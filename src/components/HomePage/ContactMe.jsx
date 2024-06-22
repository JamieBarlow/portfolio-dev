import React, { useState, useEffect, useRef } from "react";
import Button3D from "../common/Button3D";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();
  const initialFormData = {
    name: "",
    email: "",
    message: "",
    subject: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    console.log(formData);
    const fieldName = e.target.name;
    const value = e.target.value;
    setFormData((currData) => {
      return {
        ...currData,
        [fieldName]: value,
      };
    });
  };

  useEffect(() => {
    setFormData((currData) => {
      return {
        ...currData,
        subject: `${currData.name} at ${currData.email} gets in touch`,
      };
    });
  }, [formData.name, formData.email]);

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY,
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!");
          alert("Email sent!");
          resetForm();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    // fetch("/email", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.text()) // Parse JSON response
    //   .then((result) => {
    //     console.log(result.message);
    //     resetForm();
    //     alert("Email sent!");
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };
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
        <form
          className="contact__form"
          action="/email"
          method="POST"
          onSubmit={sendEmail}
          ref={form}
        >
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              className="contact__input"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="contact__field middle">
            <label htmlFor="email">Email</label>
            <input
              className="contact__input"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
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
