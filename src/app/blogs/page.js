import BlogSidebar from "@/components/BlogSidebar";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import BlogData from "@/Data/BlogsData";
import BlogCard from "@/components/BlogCard";

export const metadata = {
  title: "Blog Standard",
};

const BlogPage = () => {
  return (
    <main>
      <PageBanner pageName={"Blog Standard"} />
      <section className="blog-standard-area pb-70 rpb-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-standard-wrap">
                <div className="row g-4">
                  {Array.isArray(BlogData) &&
                    BlogData.map((data, index) => {
                      return (
                        <div className="col-lg-6 mb-4" key={index}>
                          <BlogCard {...data} />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    </main>
  );
};
export default BlogPage;
