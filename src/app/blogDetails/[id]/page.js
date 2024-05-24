import BlogSidebar from "@/components/BlogSidebar";
import Image from "next/image";
import Link from "next/link";

// IMAGES

import Comments from "@/components/Comments";
import PageBanner from "@/components/PageBanner";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { findBlog } from "@/lib/getData";
import BlogNavigation from "@/components/BlogDetails/BlogNavigation";

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const blogData = await findBlog(id);
  return {
    title: blogData.title,
  };
};

const BlogDetails = async ({ params }) => {
  const { id } = params;
  const blogData = await findBlog(id);
  return (
    <main>
      <PageBanner pageName={"Blog Details"} />
      <section className="blog-details-area pb-70 rpb-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrap">
                <div className="content mt-35">
                  <div className="blog-meta mb-30 wow fadeInUp delay-0-2s">
                    {Array.isArray(blogData?.keywords) &&
                      blogData.keywords.map((tag, index) => {
                        return (
                          <span className="tag" key={index}>
                            {tag}
                          </span>
                        );
                      })}
                  </div>
                  <div className="author-date-share mb-40 wow fadeInUp delay-0-4s">
                    <div className="text">
                      <span>Published</span>
                      <h5>{blogData?.publishedDate}</h5>
                    </div>
                    <Link href="#" className="details-btn">
                      <i className="far fa-share-alt" />
                    </Link>
                  </div>
                </div>
                <div className="image mb-35 wow fadeInUp delay-0-5s">
                  <Image
                    width={794}
                    height={455}
                    src={blogData.blogBanner}
                    alt="Blog Details"
                    className="img-fluid"
                  />
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <div
                    dangerouslySetInnerHTML={{ __html: blogData.body }}
                    className="render"
                  />
                </div>
                <hr />

                <BlogNavigation currentId={id} />
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
export default BlogDetails;
