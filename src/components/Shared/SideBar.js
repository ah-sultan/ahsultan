"use client";
import { socialMedia } from "@/Data/contactData";
import { getDateAndTime } from "@/lib/getDateAndTime";
import Link from "next/link";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";
const SideBar = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toggleSidebar = () => {
    document.querySelector("body").classList.remove("side-content-visible");
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const date = getDateAndTime();

    const contactData = {
      name,
      email,
      subject: "Subject For Appointment",
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
        setMessage("");
        toggleSidebar();
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
    <Fragment>
      {/*Form Back Drop*/}
      <div className="form-back-drop" onClick={() => toggleSidebar()} />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={() => toggleSidebar()}>
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  {loading ? "Loading..." : " Submit now"}
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <Link target="blank" href={socialMedia?.linkedin}>
              <i className="fab fa-linkedin" />
            </Link>
            <Link target="blank" href={socialMedia?.whatsapp}>
              <i className="fab fa-whatsapp" />
            </Link>
            <Link target="blank" href={socialMedia?.github}>
              <i className="fab fa-github" />
            </Link>
          </div>
        </div>
      </section>
      {/*End Hidden Sidebar */}
    </Fragment>
  );
};
export default SideBar;
