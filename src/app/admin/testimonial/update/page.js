import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import React from "react";
import AddNewTestiMonialForm from "./AddNewTestiMonialForm";
import FileUpload from "./FileUpload";
import { findTestimonial, getTestimonialData } from "@/lib/getData";
const AddNewTestimonial = async ({searchParams}) => {
  const SectionTitle = "Update Testimonial";
  const id  = searchParams.id
  const getData = await findTestimonial(id)
  
  return (
    <>
      <section className="dash-testimonial-crude">
        <DashboardBreadcrumb currentPage={SectionTitle} />
        <div className="section-header">
          <h2 className="section-title">{SectionTitle}</h2>
        </div>
        <ContentWrapper>
          <div className="dash-testimonial-form">
            <AddNewTestiMonialForm data={getData}/>
          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

export default AddNewTestimonial;
