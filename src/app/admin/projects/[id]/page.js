import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import blogCategory from "@/Data/BlogCategory.json";
import React from "react";
import { Button } from "react-bootstrap";
import BlogDescription from "@/components/Admin/DescriptionEditor";
import DescriptionEditor from "@/components/Admin/DescriptionEditor";

const AddBlog = () => {
  return (
    <>
      <section className="dash-add-blog-page">
        <DashboardBreadcrumb currentPage="Add New Blog" />
        <div className="section-header">
          <h2 className="section-title">Add New Projects</h2>
        </div>
        <ContentWrapper>
          <div className="dash-add-blog-from">
            <br />
            {/* BLOG TITLE */}
            <div className="row mb-4">
              <div className="col-7">
                <label htmlFor="ProjectTitle">Projects Title</label>
                <input
                  type="text"
                  className="dash-input-form"
                  name="ProjectTitle"
                  placeholder="Write BLog Title"
                />
              </div>
              <div className="col-5">
                <label htmlFor="ProjectTitle">Projects Preview link</label>
                <input
                  type="text"
                  className="dash-input-form"
                  name="ProjectTitle"
                  placeholder="Write BLog Title"
                />
              </div>
            </div>

            {/* BLOG THUMBNAIL AND BANNER */}
            <div className="row mb-4">
              <div className="col-6">
                <label htmlFor="ProjectThumbnail">Add Project Thumbnail</label>
                <input
                  type="file"
                  name="ProjectThumbnail"
                  className="dash-input-form"
                />
              </div>

              <div className="col-6">
                <label htmlFor="ProjectBanner">Add Banner Image</label>
                <input
                  type="file"
                  name="ProjectBanner"
                  className="dash-input-form"
                />
              </div>
            </div>
            {/* CATEGORY and PUBLISHED */}
            <div className="row mb-4">
              <div className="col-6">
                <label htmlFor="ProjectCategory">Add Project Category</label>
                <input
                  type="text"
                  name="ProjectCategory"
                  className="dash-input-form"
                />
              </div>
              <div className="col-6">
                <label htmlFor="PublishedDate">Published Date</label>
                <input
                  type="date"
                  name="PublishedDate"
                  className="dash-input-form"
                />
              </div>
            </div>
            <br />
            {/* BLOG DESCRIPTION */}
            <div>
              <label>Project Description</label>
              <div>
                <DescriptionEditor />
              </div>
            </div>
            <br />

            {/* BUTTON AREA */}
            <div className="flex align-items-center mt-4">
              <Button
                type="button"
                variant="primary"
                size="lg"
                className="me-3"
              >
                Update Project
              </Button>
              
            </div>
          </div>
        </ContentWrapper>
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default AddBlog;
