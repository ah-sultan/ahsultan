import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import { Button } from "react-bootstrap";
import CategoryItem from "./CategoryItem";
import AddNewCategory from "./AddNewCategory";
import { getBlogCatagories } from "@/lib/getData";

const Page = async () => {
  const categories = await getBlogCatagories();

  return (
    <>
      <section className="dash-blog-category">
        <DashboardBreadcrumb currentPage="Blog Category" />
        <div className="section-header">
          <h2 className="section-title">Blog Categories</h2>
        </div>
        <ContentWrapper>
          <AddNewCategory />
          <ul className="dash-category-list">
            {categories &&
              Array.isArray(categories) &&
              categories.map((data, index) => {
                return (
                  <li key={index}>
                    <CategoryItem _id={data._id} title={data.title} />
                  </li>
                );
              })}
          </ul>
        </ContentWrapper>
      </section>
    </>
  );
};

export default Page;
