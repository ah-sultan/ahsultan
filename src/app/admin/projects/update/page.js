import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import blogCategory from "@/Data/BlogCategory.json";
import React from "react";
import { Button } from "react-bootstrap";
import BlogDescription from "@/components/Admin/DescriptionEditor";
import DescriptionEditor from "@/components/Admin/DescriptionEditor";
import ProjectForm from "../ProjectForm";
import { findProject } from "@/lib/getData";

const UpdateNewProject = async ({ searchParams }) => {
  const id = searchParams.id;
  const data = await findProject(id);
  const {
    _id,
    title,
    thumbnail,
    summary,
    bannerImage,
    category,
    viewProject,
    duration,
    technologies,
    publishedDate,
    body,
  } = data;
  return (
    <>
      <section className="dash-add-blog-page">
        <DashboardBreadcrumb currentPage="Add New Blog" />
        <div className="section-header">
          <h2 className="section-title">Update Projects</h2>
        </div>
        <ContentWrapper>
          <ProjectForm
            type="update"
            title={title}
            thumbnail={thumbnail}
            summary={summary}
            bannerImage={bannerImage}
            category={category}
            viewProject={viewProject}
            duration={duration}
            technologies={technologies}
            publishedDate={publishedDate}
            body={body}
            _id={_id}
          />
        </ContentWrapper>
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default UpdateNewProject;
