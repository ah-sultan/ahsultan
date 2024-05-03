import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import ItemsButtonWrapper from "@/components/Admin/ItemsButtonWrapper";
import SectionHeader from "@/components/Admin/SectionHeader";
import BlogData from "@/Data/BlogsData";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="dash-blog">
        <DashboardBreadcrumb currentPage="All blogs" />
        <SectionHeader sectionTitle="blog" />
        <ContentWrapper noItems={false}>
          <ul>
            {Array.isArray(BlogData) &&
              BlogData.map((data, index) => {
                return (
                  <li className="dash-blog-item" key={index}>
                    <div className="card-content">
                      <h6>
                        <span>
                          {index + 1 > 9 ? index + 1 : `0${index + 1}`}.
                        </span>{" "}
                        {data.title}
                      </h6>
                      <p>
                        <span>{data.publishDate}</span>
                        <span>•</span>
                        <span>{data.category}</span>
                      </p>
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
