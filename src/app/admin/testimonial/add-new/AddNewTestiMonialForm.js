"use client";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import React from "react";
import { toast } from "react-toastify";
import UploadImage from "@/components/Admin/UploadImage";
import { handleRemoveSelectedImg } from "@/lib/helper";

const AddNewTestiMonialForm = () => {
  const [clientName, setClientName] = useState("");
  const [clientTitle, setClientTitle] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [getImages, setGetImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      clientName.length > 0 &&
      reviewText.length > 0 &&
      getImages.length > 0
    ) {
      // CREATE OBJECT DATA
      const getImgExtension =
        getImages.length > 0 && getImages[0].type.replace("image/", ".");
      const createImgName =
        clientName.length > 0 && clientName.replace(" ", "_");
      const testimonialData = {
        clientName: clientName,
        clientTitle: clientTitle,
        reviewText: reviewText,
        image: "/images/testimonials/" + createImgName + getImgExtension,
      };

      try {
        setLoading(true);
        // Fetch Api
        const res = await fetch("/api/testimonial/", {
          method: "POST",
          body: JSON.stringify(testimonialData),
        });

        if (res.statusText === "OK") {
          handleUploadImage(testimonialData.image);
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        toast.error("Error: Testimonial didn't added");
      }
    } else {
      toast.warning("Please Fill required filed");
      setLoading(false);
    }
  };

  // HANDLE UPLOAD IMAGES
  const handleUploadImage = async (path) => {
    const formData = new FormData();
    formData.append("file", getImages[0]);
    formData.append("path", path);

    try {
      const res = await fetch("/api/uploadFile", {
        method: "POST",
        body: formData,
      });
      if (res.statusText === "OK") {
        toast.success("Testimonial has created successfully");
        setLoading(false);

        // EMPTY DATA
        setClientName("");
        setClientTitle("");
        setReviewText("");
        setGetImages([]);
        handleRemoveSelectedImg()
      } else {
        setLoading(false);
      }
    } catch (error) {
      if (error) {
        toast.error("Error: Image Not uploaded");
      }

      setLoading(false);
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
        <UploadImage
          getImages={setGetImages}
          multiple={false}
        />
        <textarea
          className="dash-input-form"
          placeholder="Client Review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        />

        <div className="d-flex align-items-center ">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={loading === true}
          >
            Save Testimonial
          </Button>

          {loading && <Spinner className="ms-3" />}
        </div>
      </form>
    </>
  );
};

export default AddNewTestiMonialForm;
