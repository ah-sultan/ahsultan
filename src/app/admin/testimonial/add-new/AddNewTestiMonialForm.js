"use client";
import { useState } from "react";
import { Button } from "react-bootstrap";
import React from "react";
import { toast } from "react-toastify";

const AddNewTestiMonialForm = () => {
  const [clientName, setClientName] = useState("");
  const [clientTitle, setClientTitle] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [clientImage, setClientImage] = useState(null);

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch Api
      const res = await fetch("/api/testimonial/new", {
        method: "POST",
        body: JSON.stringify({
          clientName: clientName,
          clientTitle: clientTitle,
          reviewText: reviewText,
        }),
      });
      if (res.ok) {
        toast.success("Testimonial Added Successfully");
      }
    } catch (error) {
      toast.error("Error: Testimonial didn't added");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="dash-input-form"
          placeholder="Write Client Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />
        <input
          type="text"
          className="dash-input-form"
          placeholder="Client Title"
          value={clientTitle}
          onChange={(e) => setClientTitle(e.target.value)}
          required
        />
        <input
          type="file"
          className="dash-input-form"
          placeholder="Client Image"
          onChange={(e) => setClientImage(e.target.value)}
        />
        <textarea
          className="dash-input-form"
          placeholder="Client Review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        />
        <Button type="submit" variant="primary" size="lg">
          Save Testimonial
        </Button>
      </form>

      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      /> */}
    </>
  );
};

export default AddNewTestiMonialForm;
