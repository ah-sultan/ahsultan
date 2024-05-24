import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import React from "react";
import { Button } from "react-bootstrap";
import ServiceForm from "../ServiceForm";

const AddService = async () => {
  return (
    <>
      <section className="dash-add-blog-page">
        <DashboardBreadcrumb currentPage="Add New Service" />
        <div className="section-header">
          <h2 className="section-title">Add New Service</h2>
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
