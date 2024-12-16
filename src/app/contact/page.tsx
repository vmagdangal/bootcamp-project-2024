'use client';
import contactstyles from "./page.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Script from "next/script";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    emailjs
      .sendForm(
        "service_po5bgmg",
        "template_5xpay0p",
        form,
        "-8Vh8UV1aTCbIx5A4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
  <>
  <Script
    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
    strategy="beforeInteractive"
  />
  <Script
    id="emailjsinit"
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          emailjs.init('-8Vh8UV1aTCbIx5A4');
        })();
      `,
    }}
    strategy="beforeInteractive"
  />
    <div className={contactstyles.contactBox}>

      <h1 className="page-title">Contact</h1>
      <p>Is there anything you could use my help with? Feel free to contact me!</p>
      <form id={contactstyles.contactForm} onSubmit={handleSubmit}>
        <div className={contactstyles.topRow}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              className={contactstyles.topRow}
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className={contactstyles.topRow}
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <label htmlFor="message">Message</label>
        <textarea
          id={contactstyles.message}
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <input id="contact-submit" type="submit"/>
      </form>
      {isSubmitted && <p>Your email has been sent! I will get back to you as soon as I can.</p>}
    </div>
  </>
  );
}
