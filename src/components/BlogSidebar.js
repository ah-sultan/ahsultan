import Link from "next/link";
import BlogData from "@/Data/BlogsData";
import Image from "next/image";
import { getBlogCatagories, getBlogs } from "@/lib/getData";

const BlogSidebar = async () => {
  const category = await getBlogCatagories();
  const getBlog = await getBlogs();
  const latestBlogs =
    Array.isArray(getBlog) && getBlog.length > 0 ? getBlog.splice(0, 3) : [];

  return (
    <div className="main-sidebar rmt-65">
      <div className="widget widget-search wow fadeInUp delay-0-2s">
        <h4 className="widget-title">Search</h4>
        <form action="#" className="default-search-form">
          <input
            type="text"
            placeholder="Search option is not available"
            required=""
            disabled
          />
          <button type="submit" className="searchbutton far fa-search" />
        </form>
      </div>
      <div className="widget widget-category wow fadeInUp delay-0-4s">
        <h4 className="widget-title">Category</h4>
        <ul>
          {Array.isArray(category) &&
            category.map((data, index) => {
              return (
                <li key={index}>
                  <i className="far fa-angle-right" />{" "}
                  <Link href="blog">{data.title}</Link>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
        <h4 className="widget-title">Latest News</h4>
        {latestBlogs ? (
          <ul>
            {Array.isArray(latestBlogs) &&
              latestBlogs.map((data, index) => {
                return (
                  <li key={index}>
                    <div className="image">
                      <Image
                        width={65}
                        height={65}
                        src={data.thumbnail}
                        alt={data.title}
                        style={{
                          width: "65px",
                          height: "65px",
                        }}
                      />
                    </div>
                    <div className="content">
                      <div className="blog-meta mb-5">
                        <span className="date" href="#">
                          <i className="far fa-calendar-alt" />{" "}
                          {data.publishedDate}
                        </span>
                      </div>
                      <h5 className="line-clamp-2">
                        <Link href={`/blogDetails/${data._id}`}>
                          {data.title}
                        </Link>
                      </h5>
                    </div>
                  </li>
                );
              })}
          </ul>
        ) : (
          <h6>Blogs not found</h6>
        )}
      </div>
      <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s d-none">
        <h4 className="widget-title">Popular Tags</h4>
        <div className="tag-coulds">
          <Link href="blog">Design</Link>
          <Link href="blog">Figma</Link>
          <Link href="blog">Apps</Link>
          <Link href="blog">Branding</Link>
          <Link href="blog">Development</Link>
          <Link href="blog">Digital</Link>
          <Link href="blog">Mobile Apps</Link>
        </div>
      </div>
      <div className="widget widget-cta wow fadeInUp delay-0-2s">
        <div
          className="cta-widget"
          style={{
            backgroundImage: "url(/images/widgets/widget-cta.jpg)",
          }}
        >
          <span className="sub-title">Get A Quote</span>
          <h4>Looking For Creative Web Designer</h4>
          <Link href="/contact" className="theme-btn">
            Hire Me <i className="far fa-angle-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BlogSidebar;
