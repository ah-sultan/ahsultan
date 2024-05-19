import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import ItemsButtonWrapper from "@/components/Admin/ItemsButtonWrapper";
import SectionHeader from "@/components/Admin/SectionHeader";
import blogsData from "@/Data/BlogsData";
import { getBlogs } from "@/lib/getData";
import Image from "next/image";

const page = async () => {
  const blogsData = await getBlogs();
  return (
    <>
      <section className="dash-blog">
        <DashboardBreadcrumb currentPage="All blogs" />
        <SectionHeader sectionTitle="blog" path="/admin/blogs/add-new" />
        <ContentWrapper noItems={false}>
          <ul>
            {Array.isArray(blogsData) &&
              blogsData.map((data, index) => {
                console.log(data.title);
                return (
                  <li className="dash-blog-item" key={index}>
                    <div className="card-content">
                      <h6>{data.title}</h6>
                      <p>
                        <span>{data.publishedDate}</span>
                        <span>•</span>
                        <span>{data.category.title}</span>
                      </p>
                    </div>
                    <div className="button-area">
                      <ItemsButtonWrapper _id={data._id} api="/api/blog" modalText="Blog"/>
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
