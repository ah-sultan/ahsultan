import BlogCard from "@/components/BlogCard";
import BlogSidebar from "@/components/BlogSidebar";
import { ItemsNotFound } from "@/components/ItemsNotFound";
import PageBanner from "@/components/PageBanner";
import BlogData from "@/Data/BlogsData";
import { getBlogs } from "@/lib/getData";

export const metadata = {
  title: "Blogs - Sultan Ahmed Portfolio Website",
};

const BlogPage = async () => {
  const blogData = await getBlogs();
  return (
    <main>
      <PageBanner pageName={"Explore My Blogs"} />
      <section className="blog-standard-area pb-70 rpb-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-standard-wrap">
                <div className="row g-4">
                  {!Array.isArray(blogData) && <ItemsNotFound items="Blogs" />}
                  {Array.isArray(blogData) &&
                    blogData.map((data, index) => {
                      return (
                        <div className="col-md-6 mb-4" key={index}>
                          <BlogCard
                            _id={data._id}
                            thumbnail={data?.thumbnail}
                            category={data?.category}
                            title={data?.title}
                            publishedDate={data?.publishedDate}
                          />
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
