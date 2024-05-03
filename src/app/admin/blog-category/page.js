import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import { Button } from "react-bootstrap";
import BlogCategory from "@/Data/BlogCategory";
import CategoryItem from "./CategoryItem";

const page = () => {
  return (
    <>
      <section className="dash-blog-category">
        <DashboardBreadcrumb currentPage="Blog Category" />
        <div className="section-header">
          <h2 className="section-title">Blog Categories</h2>
        </div>
        <ContentWrapper>
          <div className="add-category-block">
            <div>
              <label htmlFor="addCategory">Add New Category</label>
              <input
                type="text"
                placeholder="Add New Category"
                className="dash-input-form"
                name="addCategory"
              />
            </div>
            <Button type="button" variant="primary">
              Add Now
            </Button>
          </div>
          <ul className="dash-category-list">
            {Array.isArray(BlogCategory) &&
              BlogCategory.map((data, index) => {
                return (
                  <li key={index}>
                    <CategoryItem {...data} />
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
