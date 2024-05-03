import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import DescriptionEditor from "@/components/Admin/DescriptionEditor";
import blogCategory from "@/Data/BlogCategory.json";
import React from "react";
import { Button } from "react-bootstrap";

const AddBlog = () => {
  return (
    <>
      <section className="dash-add-blog-page">
        <DashboardBreadcrumb currentPage="Add New Blog" />
        <div className="section-header">
          <h2 className="section-title">Write New Blog</h2>
        </div>
        <ContentWrapper>
          <div className="dash-add-blog-from">
            {/* BLOG TITLE */}
            <div className="from-block">
              <label htmlFor="BlogTitle">Blog Title</label>
              <input
                type="text"
                className="dash-input-form"
                name="BlogTitle"
                placeholder="Write BLog Title"
              />
            </div>
            {/* BLOG THUMBNAIL AND BANNER */}
            <div className="row">
              <div className="col-6">
                <label htmlFor="BlogThumbnail">Add Blog Thumbnail</label>
                <input
                  type="file"
                  name="BlogThumbnail"
                  className="dash-input-form"
                />
              </div>

              <div className="col-6">
                <label htmlFor="BlogBanner">Add Banner Image</label>
                <input
                  type="file"
                  name="BlogBanner"
                  className="dash-input-form"
                />
              </div>
            </div>
            {/* BLOG CATEGORY and PUBLISHED */}
            <div className="row">
              <div className="col-6">
                <label htmlFor="PublishedDate">Select Category:</label>
                <select name="PublishedDate" className="dash-input-from">
                  {Array.isArray(blogCategory) &&
                    blogCategory.map((data, index) => {
                      return <option key={index}>{data.title}</option>;
                    })}
                </select>
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
              <label>BLog Description</label>
              <div>
                <DescriptionEditor />
              </div>
            </div>
            <br />
            <br />
            {/* BLOG DESCRIPTION */}
            <div>
              <label htmlFor="blogKeyWords">Key Words</label>
              <textarea
                name="blogKeyWords"
                className="dash-input-form"
                style={{ minHeight: "100px" }}
                placeholder="Write Keywords"
              />
            </div>
            {/* BUTTON AREA */}
            <div className="flex align-items-center mt-4">
              <Button type="button" variant="primary" size="lg" className="me-3">Save Blog</Button>
              <Button type="button" variant="success" size="lg">Published</Button>
            </div>
          </div>
        </ContentWrapper>
        <br /><br /><br />
      </section>
    </>
  );
};

export default AddBlog;
