"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

const ServiceForm = ({
  type,
  _id,
  title,
  serviceNo,
  description,
  body = "This Is Service body",
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newServicesNo, setNewServicesNo] = useState(serviceNo);
  const [newDescription, setNewDescription] = useState(description);
  const [newBody, setNewBody] = useState(body);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const serviceData = {
    title: newTitle,
    serviceNo: newServicesNo,
    description: newDescription,
    body: newBody,
  };

  //   HANDLE POST
  const handlePost = async () => {
    if (
      (newTitle.length &&
        newServicesNo.length &&
        newDescription.length &&
        newBody.length) > 0
    ) {
      setLoading(true);

      try {
        const res = await fetch("/api/service", {
          method: "POST",
          body: JSON.stringify(serviceData),
        });

        if (res.ok) {
          setLoading(false);
          router.refresh();
          toast.success("Services added successfully");

          setNewTitle("");
          setNewServicesNo("");
          setNewDescription("");
          setNewBody("THIS IS BODY ");
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        toast.error("something went wrong. Please try aging");
      }
    } else {
      toast.warning("Please fill required filed");
    }
  };

  //   HANDLE UPDATE
  const handleUpdate = async () => {
    if (
      newTitle === title ||
      newServicesNo === serviceNo ||
      newBody === body ||
      description === newDescription
    ) {
      setLoading(true);
      try {
        const res = await fetch(`/api/service?id=${_id}`, {
          method: "PATCH",
          body: JSON.stringify(serviceData),
        });

        if (res.ok) {
          setLoading(false);
          toast.success("Services Updates Successfully");
        } else {
          setLoading(false);
          toast.error("Failed to update services");
        }
      } catch (error) {
        setLoading(false);
        toast.error("Failed to update services");
      }
    } else {
      toast.warn("please change any filed");
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "post") {
      handlePost();
    }
    if (type === "update") {
      handleUpdate();
    }
  };
  return (
    <form className="dash-add-service-from" onSubmit={handleSubmit}>
      <div className="row">
        {/* service title */}
        <div className="col-8">
          <label htmlFor="serviceTitle">Service Title</label>
          <input
            type="text"
            className="dash-input-form"
            name="serviceTitle"
            placeholder="Write service Title"
            required
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
          />
        </div>
        {/* service title */}
        <div className="col-4">
          <label htmlFor="serviceTitle">Service Number</label>
          <input
            type="text"
            className="dash-input-form"
            name="serviceTitle"
            placeholder="Write service Title"
            required
            onChange={(e) => setNewServicesNo(e.target.value)}
            value={newServicesNo}
          />
        </div>
      </div>

      {/* SERVICE DESCRIPTION */}
      <div className="div">
        <label htmlFor="serviceTitle">Service Description</label>
        <textarea
          type="text"
          className="dash-input-form"
          name="serviceTitle"
          placeholder="Write service Title"
          required
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
        />
      </div>

      {/* BUTTON AREA */}
      <div className="d-flex align-items-center mt-4">
        <Button
          disabled={loading}
          type="submit"
          variant="primary"
          size="lg"
          className="me-3"
        >
          {type === "post" && "Save Services"}
          {type === "update" && "Update Services"}
        </Button>
        {loading && <Spinner />}
      </div>
    </form>
  );
};

export default ServiceForm;
