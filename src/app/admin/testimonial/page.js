import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import ItemsButtonWrapper from "@/components/Admin/ItemsButtonWrapper";
import SectionHeader from "@/components/Admin/SectionHeader";
import TestimonialData from "@/Data/TestimonialData";
import { getTestimonialData } from "@/lib/getData";
import TestimonialSchema from "@/models/schema/testimonial";
import { connectToDB } from "@/utils/database";
import Image from "next/image";

const page = async () => {
  const getData = await getTestimonialData();

  return (
    <>
      <section className="dash-testimonial">
        <DashboardBreadcrumb currentPage="Testimonial" />
        <SectionHeader
          sectionTitle="testimonial"
          path="/admin/testimonial/add-new"
        />
        <ContentWrapper noItems={false}>
          <ul>
            {Array.isArray(getData) &&
              getData.map((data, index) => {
                return (
                  <li className="dash-testimonial-item" key={index}>
                    <div className="card-content">
                      <Image
                        width={60}
                        height={60}
                        className="img-fluid"
                        src={data.image}
                        alt={data.clientName}
                      />
                      <div className="content-info">
                        <h6>
                          <b>{data.clientName}</b>
                          <span>|</span>
                          <span>{data.clientTitle}</span>
                        </h6>
                        <p>{data.reviewText}</p>
                      </div>
                    </div>
                    <div className="button-area">
                      <ItemsButtonWrapper
                        modalText="Testimonial"
                        api="/api/testimonial"
                        _id={data.id}
                        image={data.image}
                      />
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
