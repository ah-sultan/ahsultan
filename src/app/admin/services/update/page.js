import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import React from "react";
import { Button } from "react-bootstrap";
import ServiceForm from "../ServiceForm";
import { findService } from "@/lib/getData";

const updateService = async ({ searchParams }) => {
  const id = searchParams.id;
  const data = await findService(id);
  return (
    <>
      <section className="dash-add-blog-page">
        <DashboardBreadcrumb currentPage="Add New Service" />
        <div className="section-header">
          <h2 className="section-title">Write New Blog</h2>
        </div>
        <ContentWrapper>
          <ServiceForm
            type="update"
            _id={data._id}
            title={data.title}
            serviceNo={data.serviceNo}
            description={data.description}
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

export default updateService;
