"use client";

import { getDateAndTime } from "@/lib/getDateAndTime";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const date = getDateAndTime();

    const contactData = {
      name,
      email,
      subject,
      message,
      date,
    };

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        body: JSON.stringify(contactData),
      });
      if (res.ok) {
        setLoading(false);
        toast.success("Message send successfully");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setLoading(false);
        toast.success("Message not send please try again");
      }
    } catch (error) {
      setLoading(false);
      toast.error("something went error");
    }
  };
  return (
    <form
      id="contactForm"
      className="contactForm"
      name="contactForm"
      action="assets/php/form-process.php"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Richard D. Hammond"
              required
              data-error="Please enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name" className="for-icon">
              <i className="far fa-user" />
            </label>
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="support@gmail.com"
              data-error="Please enter your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="for-icon">
              <i className="far fa-envelope" />
            </label>
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              required
              data-error="Please enter your Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label htmlFor="subject" className="for-icon">
              <i className="far fa-text" />
            </label>
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="form-control"
              rows={4}
              placeholder="write message"
              required
              data-error="Please enter your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group mb-0 d-flex align-items-center">
            <button type="submit" className="theme-btn me-4" disabled={loading}>
              Send Us Message <i className="far fa-angle-right" />
            </button>
            {loading && <Spinner />}
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
