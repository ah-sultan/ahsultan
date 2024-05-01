import BlogSidebar from "@/components/BlogSidebar";
import Image from "next/image";
import Link from "next/link";

// IMAGES
import authorImg from "../../../public/images/blog/author.jpg";
import adminAuthorImg from "../../../public/images/blog/admin-author.jpg";
import Comments from "@/components/Comments";

export const metadata = {
  title: "Blog Details",
};

const BlogDetails = () => {
  return (
    <main>
      <section className="page-banner-area pt-200 rpt-140 pb-100 rpb-60 rel z-1 text-center">
        <div className="container">
          <div className="banner-inner text-white">
            <h3 className="page-title wow fadeInUp delay-0-2s">
              {" "}
              Tips For Conducting to Usability Studies With Participants
            </h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">
                  {" "}
                  Tips For Conducting to Usability Studies With Participants
                </li>
              </ol>
            </nav>
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
      {/* Page Banner End */}
      {/* Blog Details Area start */}
      <section className="blog-details-area pb-70 rpb-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrap">
                <div className="content mt-35">
                  <div className="blog-meta mb-30 wow fadeInUp delay-0-2s">
                    <Link className="tag" href="/blog">
                      Design
                    </Link>
                    <Link className="tag" href="/blog">
                      Figma
                    </Link>
                  </div>
                  <div className="author-date-share mb-40 wow fadeInUp delay-0-4s">
                    <div className="author">
                      <Image src={authorImg} alt="Author" />
                    </div>
                    <div className="text">
                      <span>Post By</span>
                      <h5>Martin D. Rubio</h5>
                    </div>
                    <div className="text">
                      <span>Published</span>
                      <h5>September 25, 2023</h5>
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
                    src="/images/blog/blog-details.jpg"
                    alt="Blog Details"
                    className="img-fluid"
                  />
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <p className="big-letter">
                    sSed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam eaque ipsa quae abillo inventore veritatis
                  </p>
                  <p>
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequature
                  </p>
                  <blockquote>
                    Handling Mounting And Unmounting Of Given Navigation Routes
                    In React Native
                    <span className="blockquote-footer">Johnny M. Martin</span>
                  </blockquote>
                </div>
                <div className="row gap-20">
                  <div className="col-md-6">
                    <div className="image mb-20 wow fadeInUp delay-0-2s">
                      <Image
                        width={400}
                        height={315}
                        className="img-fluid"
                        src="/images/blog/blog-middle1.jpg"
                        alt="Blog Middle"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="image mb-20 wow fadeInUp delay-0-4s">
                      <Image
                        width={400}
                        height={315}
                        className="img-fluid"
                        src="/images/blog/blog-middle2.jpg"
                        alt="Blog Middle"
                      />
                    </div>
                  </div>
                </div>
                <div className="content mt-30 wow fadeInUp delay-0-2s">
                  <h4>Get Your Service to Improve Business</h4>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam
                  </p>
                  <div className="tag-share mt-45 py-30 wow fadeInUp delay-0-2s">
                    <div className="item">
                      <b>Tags</b>
                      <div className="tag-coulds">
                        <Link href="blog">Design</Link>
                        <Link href="blog">Figma</Link>
                        <Link href="blog">Apps</Link>
                      </div>
                    </div>
                    <div className="item">
                      <b>Share</b>
                      <div className="social-style-one">
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-instagram" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="admin-comment mt-50 wow fadeInUp delay-0-2s">
                  <div className="comment-body">
                    <div className="author-thumb">
                      <Image  src={adminAuthorImg} alt="Author" />
                    </div>
                    <div className="content">
                      <h5>Richard M. Fudge</h5>
                      <p>
                        We denounce with righteous indignation and dislike men
                        beguiled and demoralized by the charms of pleasure of
                        the moment
                      </p>
                      <div className="social-style-two mt-5">
                        <Link href="/contact">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="/contact">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link href="/contact">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link href="/contact">
                          <i className="fab fa-instagram" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  {/* BLOG DETAILS NAVIGATION */}
                  <div className="next-prev-post pt-50 pb-20 wow fadeInUp delay-0-2s">
                    <div className="post-item">
                      <div className="image">
                        <Image width={65} height={65} className="img-fluid" src="/images/blog/post-prev.jpg" alt="Post" />
                      </div>
                      <div className="post-content">
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          <Link href="#">Sep 25, 2023</Link>
                        </span>
                        <h6>
                          <Link href="blog-details">
                            Tips For Conducting Studie
                          </Link>
                        </h6>
                      </div>
                    </div>
                    <div className="post-item">
                      <div className="image">
                        <Image width={65} height={65} className="img-fluid" src="/images/blog/post-next.jpg" alt="Post" />
                      </div>
                      <div className="post-content">
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          <Link href="#">Sep 25, 2023</Link>
                        </span>
                        <h6>
                          <Link href="blog-details">
                            Usability With Participants
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* COMMENTS SECTION */}
                <Comments/>
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
