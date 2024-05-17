import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import React from "react";
import TestiMonialForm from "../TestiMonialForm";
const AddNewTestimonial = () => {
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
            <TestiMonialForm isPost={true} />
          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

export default AddNewTestimonial;
