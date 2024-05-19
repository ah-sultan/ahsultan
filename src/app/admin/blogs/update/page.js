import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import React from "react";
import { Button } from "react-bootstrap";
import BlogForm from "../BlogForm";
import { findBlog } from "@/lib/getData";

const UpdateBlog = async ({searchParams}) => {
  const id = searchParams.id;
  const data = await findBlog(id);
  return (
    <>
      <section className="dash-add-blog-page">
        <DashboardBreadcrumb currentPage="Add New Blog" />
        <div className="section-header">
          <h2 className="section-title">Update This Blog</h2>
        </div>
        <ContentWrapper>
          <BlogForm
            type="update"
            _id={data._id}
            title={data.title}
            category={data.category}
            thumbnail={data.thumbnail}
            blogBanner={data.blogBanner}
            keywords={data.keywords}
            body={data.body}
          />
        </ContentWrapper>
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default UpdateBlog;
