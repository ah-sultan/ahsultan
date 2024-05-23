import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import { findTestimonial, findUser, getTestimonialData } from "@/lib/getData";
import TestiMonialForm from "../UserForm";
import UserForm from "../UserForm";

const UpdateTestimonial = async ({ searchParams }) => {
  const SectionTitle = "Update Testimonial";
  const id = searchParams.id;
  const data = await findUser(id);

  return (
    <>
      <section className="dash-testimonial-crude">
        <DashboardBreadcrumb currentPage={SectionTitle} />
        <div className="section-header">
          <h2 className="section-title">{SectionTitle}</h2>
        </div>
        <ContentWrapper>
          <div className="dash-testimonial-form">
            <UserForm
              type="update"
              _id={data.id}
              image={data.image}
              userName={data.userName}
              fullName={data.fullName}
              role={data.role}
              password={data.password}
              email={data.email}
            />
          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

export default UpdateTestimonial;
