import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import { findTestimonial, getTestimonialData } from "@/lib/getData";
import TestiMonialForm from "../TestiMonialForm";

const UpdateTestimonial = async ({ searchParams }) => {
  const SectionTitle = "Update Testimonial";
  const id = searchParams.id;
  const data = await findTestimonial(id);

  return (
    <>
      <section className="dash-testimonial-crude">
        <DashboardBreadcrumb currentPage={SectionTitle} />
        <div className="section-header">
          <h2 className="section-title">{SectionTitle}</h2>
        </div>
        <ContentWrapper>
          <div className="dash-testimonial-form">
            <TestiMonialForm
              isUpdate={true}
              _id={data.id}
              reviewText={data.reviewText}
              clientName={data.clientName}
              clientTitle={data.clientTitle}
              publishDate={data.publishDate}
              image={data.image}
            />
          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

export default UpdateTestimonial;
