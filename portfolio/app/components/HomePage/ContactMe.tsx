"use client";

import { useState, useContext, useRef } from "react";
import Button3D from "../ui/Button3D";
import { ObserverContext } from "@/app/context/ObserverContext";
import { ToastPosition } from "react-toastify";

export type DisplayToast = (
  message: string,
  position: ToastPosition,
  type: "success" | "error",
) => void;

interface ContactMeProps {
  displayToast: DisplayToast;
}

const ContactMe = ({ displayToast }: ContactMeProps) => {
  const { contactMeRef } = useContext(ObserverContext);
  const form = useRef(null);
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setFormData((currData) => {
      return {
        ...currData,
        [fieldName]: value,
      };
    });
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const sendEmail = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        displayToast("Email sent, thankyou!", "top-right", "success");
        resetForm();
      }
    } catch (error) {
      displayToast(
        "Error sending email - please try my LinkedIn",
        "top-right",
        "error",
      );
      console.log("FAILED...", error);
    }
  };
  return (
    <section
      className="contact bg--blue text--light"
      id="contactMe"
      ref={contactMeRef}
    >
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
          // action="/email"
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
              rows={10}
              cols={80}
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
              isInternalLink={true}
              icon={<i className="fa-regular fa-paper-plane"></i>}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
