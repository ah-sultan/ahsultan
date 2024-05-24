import { getBlogs } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogNavigation = async ({ currentId }) => {
  const allBlogs = await getBlogs();
  const currentIndex = await allBlogs.findIndex(
    (blog) => blog?.id?.toString() === currentId?.toString()
  );
  const prevBlog = (await currentIndex) ? allBlogs[currentIndex - 1] : false;
  const nextBlog =
    (await currentIndex) + 1 ? allBlogs[currentIndex + 1] : false;

  return (
    <>
      <div className="content">
        {/* BLOG DETAILS NAVIGATION */}
        <div className="next-prev-post pt-50 pb-20 wow fadeInUp delay-0-2s">
          {prevBlog ? (
            <Link href={`/blogDetails/${prevBlog._id}`}>
              <div className="post-item">
                <div className="image">
                  <Image
                    width={65}
                    height={65}
                    style={{
                      width: 65,
                      height: 65,
                    }}
                    src={prevBlog?.thumbnail}
                    alt={prevBlog?.title}
                  />
                </div>
                <div className="post-content">
                  <span className="date">
                    <i className="far fa-calendar-alt" />
                    <span href="#">{prevBlog?.publishedDate}</span>
                  </span>
                  <h6 className="line-clamp-2">{prevBlog?.title}</h6>
                </div>
              </div>
            </Link>
          ) : (
            <p>No previous blog</p>
          )}

          {nextBlog ? (
            <Link href={`/blogDetails/${nextBlog._id}`}>
              <div className="post-item">
                <div className="image">
                  <Image
                    width={65}
                    height={65}
                    src={nextBlog?.thumbnail}
                    alt={nextBlog?.title}
                    style={{
                      width: 65,
                      height: 65,
                    }}
                  />
                </div>
                <div className="post-content">
                  <span className="date">
                    <i className="far fa-calendar-alt" />
                    <span href="#">{nextBlog?.publishedDate}</span>
                  </span>
                  <h6 className="line-clamp-2">{prevBlog?.title}</h6>
                </div>
              </div>
            </Link>
          ) : (
            <p>No Next blog</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogNavigation;
