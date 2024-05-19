import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import React from "react";
import { Button } from "react-bootstrap";
import ServiceForm from "../ServiceForm";

const AddService = async () => {
  return (
    <>
      <section className="dash-add-blog-page">
        <DashboardBreadcrumb currentPage="Add New Blog" />
        <div className="section-header">
          <h2 className="section-title">Write New Blog</h2>
        </div>
        <ContentWrapper>
          <ServiceForm type="post" />
        </ContentWrapper>
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default AddService;
