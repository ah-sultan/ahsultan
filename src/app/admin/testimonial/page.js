import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import ItemsButtonWrapper from "@/components/Admin/ItemsButtonWrapper";
import SectionHeader from "@/components/Admin/SectionHeader";
import TestimonialData from "@/Data/TestimonialData";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="dash-testimonial">
        <DashboardBreadcrumb currentPage="Testimonial" />
        <SectionHeader sectionTitle="testimonial" />
        <ContentWrapper noItems={false}>
          <ul>
            {Array.isArray(TestimonialData) &&
              TestimonialData.map((data, index) => {
                return (
                  <li className="dash-testimonial-item" key={index}>
                    <div className="card-content">
                      <Image
                        width={60}
                        height={60}
                        className="img-fluid"
                        src={data.authorImg}
                        alt={data.authorName}
                      />
                      <div className="content-info">
                        <h6>
                          <b>{data.authorName}</b>
                          <span>|</span>
                          <span>{data.authorDesignation}</span>
                        </h6>
                        <p>{data.reviewText}</p>
                      </div>
                    </div>
                    <div className="button-area">
                      <ItemsButtonWrapper />
                    </div>
                  </li>
                );
              })}
          </ul>
        </ContentWrapper>
      </section>
    </>
  );
};

export default page;
