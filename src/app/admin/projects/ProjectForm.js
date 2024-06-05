"use client";
import DescriptionEditor from "@/components/Admin/DescriptionEditor";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

const ProjectForm = ({
  title,
  thumbnail,
  summary,
  bannerImage,
  category,
  viewProjectUrl,
  viewProjectName,
  duration,
  technologies,
  publishedDate,
  body,
  type,
  _id,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newThumbnail, setNewThumbnail] = useState(thumbnail);
  const [newSummary, setNewSummary] = useState(summary);
  const [newBannerImage, setNewBannerImage] = useState(bannerImage);
  const [newCategory, setNewCategory] = useState(category);
  const [newViewProject, setNewViewProject] = useState({
    url: viewProjectUrl,
    name: viewProjectName,
  });
  const [newDuration, setNewDuration] = useState(duration);
  const [newTechnologies, setNewTechnologies] = useState(technologies);
  const [newPublishedDate, setNewPublishedDate] = useState(publishedDate);
  const [newBody, setNewBody] = useState(body);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  //   Project Data
  const projectData = {
    title: newTitle,
    thumbnail: newThumbnail,
    summary: newSummary,
    bannerImage: newBannerImage,
    category: newCategory,
    viewProject: newViewProject,
    duration: newDuration,
    technologies: newTechnologies,
    publishedDate: newPublishedDate,
    body: newBody,
  };

  //   Handle Post
  const handlePost = async () => {
    if (
      (newTitle?.length &&
        newThumbnail?.length &&
        newSummary?.length &&
        newBannerImage?.length &&
        newCategory?.length &&
        newViewProject?.url?.length &&
        newViewProject?.name?.length &&
        newDuration?.length &&
        newTechnologies?.length &&
        newPublishedDate?.length &&
        newBody?.length) > 0
    ) {
      setLoading(true);
      try {
        const res = await fetch("/api/project", {
          method: "POST",
          body: JSON.stringify(projectData),
        });

        if (res.ok) {
          setLoading(false);
          router.refresh();
          toast.success("Project Added Successfully");

          // Update useState
          setNewTitle("");
          setNewThumbnail("");
          setNewSummary("");
          setNewBannerImage("");
          setNewCategory("");
          setNewViewProject("");
          setNewDuration("");
          setNewTechnologies("");
          setNewDuration("");
          setNewPublishedDate("");
          setNewBody("");
        } else {
          setLoading(false);
        }
      } catch (error) {
        toast.error("Something went wrong. please try again");
        setLoading(false);
      }
    } else {
      toast.error("please fill required field");
    }
  };

  //   Handle Update
  const handleUpdate = async () => {
    if (
      newTitle !== title ||
      newThumbnail !== thumbnail ||
      newSummary !== summary ||
      newBannerImage !== bannerImage ||
      newCategory !== category ||
      newViewProject?.url !== viewProjectUrl ||
      newViewProject?.name !== viewProjectName ||
      newDuration !== duration ||
      newTechnologies !== technologies ||
      newPublishedDate !== publishedDate ||
      newBody !== body
    ) {
      setLoading(true);
      try {
        const res = await fetch(`/api/project?id=${_id}`, {
          method: "PATCH",
          body: JSON.stringify(projectData),
        });

        if (res.ok) {
          setLoading(false);
          router.refresh();
          toast.success("Project updated successfully");
        } else {
          setLoading(false);
          toast.error("Failed to update Project");
        }
      } catch (error) {
        setLoading(false);
        toast.error("Failed to update Project");
      }
    } else {
      toast.warning("Please Change any filed");
    }
  };

  //   Handel Submit'
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
    <>
      <form onSubmit={handleSubmit} className="dash-add-blog-from">
        <div className="row my-4">
          {/* Project Title*/}
          <div className="col-12">
            <label htmlFor="ProjectTitle">Projects Title</label>
            <input
              type="text"
              className="dash-input-form"
              name="ProjectTitle"
              placeholder="Write Project Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          {/* Project Preview Link */}
          <div className="col-6">
            <label htmlFor="ProjectPreviewLink">Preview Url</label>
            <input
              type="text"
              className="dash-input-form"
              name="ProjectPreviewLink"
              placeholder="Write Preview Link"
              value={newViewProject?.url}
              onChange={(e) =>
                setNewViewProject({ ...newViewProject, url: e.target.value })
              }
            />
          </div>
          {/* Project Preview Link */}
          <div className="col-6">
            <label htmlFor="ProjectPreviewLink">Project Name</label>
            <input
              type="text"
              className="dash-input-form"
              name="ProjectName"
              placeholder="Write Preview Link"
              value={newViewProject?.project}
              onChange={(e) =>
                setNewViewProject({ ...newViewProject, name: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row mb-4">
          {/* Project Summary */}
          <div className="col-8">
            <label htmlFor="ProjectSummary">Projects Summary</label>
            <input
              type="text"
              className="dash-input-form"
              name="ProjectSummary"
              placeholder="Write Project Summary"
              value={newSummary}
              onChange={(e) => setNewSummary(e.target.value)}
            />
          </div>
          {/* Project Published Date */}
          <div className="col-4">
            <label htmlFor="ProjectPublishedDate">Published Date</label>
            <input
              type="date"
              className="dash-input-form"
              name="ProjectPublishedDate"
              placeholder="Write Project Summary"
              value={newPublishedDate}
              onChange={(e) => setNewPublishedDate(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-4">
          {/* Thumbnail */}
          <div className="col-6">
            <label htmlFor="ProjectBanner">Add Thumbnail 630 X 500</label>
            <ImageGallery
              gridCols={4}
              getSingleImage={setNewThumbnail}
              prevImages={newThumbnail && [newThumbnail]}
            />
          </div>
          {/* Banner Image */}
          <div className="col-6">
            <label htmlFor="ProjectBanner">Add Banner Image 1290 X 590</label>
            <ImageGallery
              gridCols={4}
              getSingleImage={setNewBannerImage}
              prevImages={newBannerImage && [newBannerImage]}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-4">
            {/* Category  */}
            <label htmlFor="ProjectCategory">Category</label>
            <input
              type="text"
              name="ProjectCategory"
              className="dash-input-form"
              placeholder="Write category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </div>
          <div className="col-4">
            {/* Category  */}
            <label htmlFor="ProjectTechnologies">Technologies</label>
            <input
              type="text"
              name="ProjectTechnologies"
              className="dash-input-form"
              placeholder="Write Technologies"
              value={newTechnologies}
              onChange={(e) => setNewTechnologies(e.target.value)}
            />
          </div>
          <div className="col-4">
            {/* Category  */}
            <label htmlFor="ProjectDuration">Duration</label>
            <input
              type="text"
              name="ProjectDuration"
              className="dash-input-form"
              placeholder="Write Duration"
              value={newDuration}
              onChange={(e) => setNewDuration(e.target.value)}
            />
          </div>
        </div>
        <br />
        {/* Body */}
        <div>
          <label>Project Description</label>
          <div>
            <DescriptionEditor value={newBody} setValue={setNewBody} />
          </div>
        </div>
        <br />

        {/* BUTTON AREA */}
        <div className="d-flex align-items-center mt-4">
          <Button
            disabled={loading}
            type="submit"
            variant="primary"
            size="lg"
            className="me-3"
          >
            {type === "post" && "Save Project"}
            {type === "update" && "Update Project"}
          </Button>
          {loading && <Spinner />}
        </div>
      </form>
    </>
  );
};

export default ProjectForm;
