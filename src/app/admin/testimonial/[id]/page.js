import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import React from "react";
import { Button } from "react-bootstrap";

const HandleTestimonial = () => {
  const SectionTitle = "Add New Testimonial";

  return (
    <>
      <section className="dash-testimonial-crude">
        <DashboardBreadcrumb currentPage={SectionTitle} />
        <div className="section-header">
          <h2 className="section-title">{SectionTitle}</h2>
        </div>
        <ContentWrapper>
          <div className="dash-testimonial-form">
            <input
              type="text"
              className="dash-input-form"
              placeholder="Write Client Name"
            />
            <input
              type="text"
              className="dash-input-form"
              placeholder="Client Title"
            />
            <input
              type="file"
              className="dash-input-form"
              placeholder="Client Image"
            />
            <textarea className="dash-input-form" placeholder="Client Review" />
            <Button variant="primary" size="lg">Save Testimonial</Button>
            <Button variant="success" size="lg">Save Changes</Button>
          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

export default HandleTestimonial;
