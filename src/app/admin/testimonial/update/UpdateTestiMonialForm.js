"use client";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import React from "react";
import { toast } from "react-toastify";
import UploadImage from "@/components/Admin/UploadImage";
import { handleRemoveSelectedImg } from "@/lib/helper";
import { useRouter } from "next/navigation";

const UpdateTestiMonialForm = ({ data }) => {
  const [clientName, setClientName] = useState(data.clientName);
  const [clientTitle, setClientTitle] = useState(data.clientTitle);
  const [reviewText, setReviewText] = useState(data.reviewText);
  const [getImages, setGetImages] = useState([data.image]);
  const [loading, setLoading] = useState(false);

  // ROUTER
  const router = useRouter();

  // Handle Submit
  const handleUpdate = async (e) => {
    e.preventDefault();

    // CREATE OBJECT DATA
   
    const isImgUpdate = data.image === getImages[0].name
    const imageName = getImages

    // TESTIMONIAL UPDATE DATA
    const testimonialData = {
      clientName: clientName,
      clientTitle: clientTitle,
      reviewText: reviewText,
      image: imageName,
    };

    try {
      setLoading(true);
      // Fetch Api
      const res = await fetch("/api/testimonial/", {
        method: "PUT",
        body: JSON.stringify(testimonialData),
      });

      if (res.statusText === "OK") {
       
        if (data.image !== testimonialData.image) {
          handleUpdateImage(testimonialData.image);
        }
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error: Testimonial didn't added");
    }
  };

  // HANDLE UPLOAD IMAGES
  const handleUpdateImage = async (path) => {
    const formData = new FormData();
    formData.append("file", getImages[0]);
    formData.append("newPath", path);
    formData.append("prevPath")

    try {
      const res = await fetch("/api/uploadFile", {
        method: "PUT",
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
        handleRemoveSelectedImg();
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
      <form onSubmit={handleUpdate}>
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
          prevImage={data.image}
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
            Update
          </Button>

          {loading && <Spinner className="ms-3" />}
        </div>
      </form>
    </>
  );
};

export default UpdateTestiMonialForm;
