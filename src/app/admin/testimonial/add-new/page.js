import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import React from "react";
import AddNewTestiMonialForm from "./AddNewTestiMonialForm";
import FileUpload from "./FileUpload";

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
            {/* <AddNewTestiMonialForm /> */}
            <FileUpload/>
          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

export default AddNewTestimonial;
