"use client";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import React from "react";
import { toast } from "react-toastify";
import { handleRemoveSelectedImg } from "@/lib/helper";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { useRouter } from "next/navigation";

const TestiMonialForm = ({
  _id,
  image,
  reviewText,
  clientName,
  clientTitle,
  publishDate,
  isUpdate,
  isPost,
}) => {
  const [newName, setNewName] = useState(clientName);
  const [newTitle, setNewTitle] = useState(clientTitle);
  const [newReview, setNewReview] = useState(reviewText);
  const [newImage, setNewImage] = useState(image);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // Handle Submit
  const handlePost = async () => {
    if (
      newName.length > 0 &&
      newReview.length > 0 &&
      newImage.length > 0 &&
      newTitle.length > 0
    ) {
      // CREATE TESTIMONIAL DATA
      const testimonialData = {
        clientName: newName,
        clientTitle: newTitle,
        reviewText: newReview,
        image: newImage,
      };

      try {
        setLoading(true);
        // Fetch Api
        const res = await fetch("/api/testimonial/", {
          method: "POST",
          body: JSON.stringify(testimonialData),
        });

        if (res.statusText === "OK") {
          setLoading(false);
          toast.success("Testimonial Added Successfully");
          setNewName("");
          setNewName("");
          setNewReview("");
          setNewTitle("");
          router.refresh();
        } else {
          setLoading(false);
          toast.error("Something wen't wrong please try again");
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

  // HANDLE UPDATE
  const handleUpdate = async () => {
    // CREATE TESTIMONIAL DATA
    const testimonialData = {
      clientName: newName,
      clientTitle: newTitle,
      reviewText: newReview,
      image: newImage,
    };

    try {
      setLoading(true);
      const res = await fetch(`/api/testimonial?id=${_id}`, {
        method: "PATCH",
        body: JSON.stringify(testimonialData),
      });

      if (res.statusText === "OK") {
        toast.success("Testimonial Updated Successfully");
        router.refresh();
        setLoading(false)


      } else {
        setLoading(false);
      }
    } catch (error) {
      toast.error("Testimonial Did Not update");
      setLoading(false);
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      handleUpdate();
    }

    if (isPost) {
      handlePost();
    }
  };

  // REMOVE IMAGE
  const handleRemoveImage = () => {
    setNewImage("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="dash-input-form"
          placeholder="Write Client Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
        <input
          type="text"
          className="dash-input-form"
          placeholder="Client Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          required
        />
        <ImageGallery
          prevImages={newImage && [newImage]}
          getSingleImage={setNewImage}
          handleRemoveImage={handleRemoveImage}
        />
        <textarea
          className="dash-input-form"
          placeholder="Client Review"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          required
        />

        <div className="d-flex align-items-center ">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={loading === true}
          >
            {isPost && "Save Testimonials"}
            {isUpdate && "Update Now"}
          </Button>

          {loading && <Spinner className="ms-3" />}
        </div>
      </form>
    </>
  );
};

export default TestiMonialForm;
