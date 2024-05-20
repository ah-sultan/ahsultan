import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import blogCategory from "@/Data/BlogCategory.json";
import React from "react";
import { Button } from "react-bootstrap";
import BlogDescription from "@/components/Admin/DescriptionEditor";
import DescriptionEditor from "@/components/Admin/DescriptionEditor";
import ProjectForm from "../ProjectForm";

const AddNewProject = async () => {
  return (
    <>
      <section className="dash-add-blog-page">
        <DashboardBreadcrumb currentPage="Add New Blog" />
        <div className="section-header">
          <h2 className="section-title">Add New Projects</h2>
        </div>
        <ContentWrapper>
          <ProjectForm type="post" />
        </ContentWrapper>
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default AddNewProject;
