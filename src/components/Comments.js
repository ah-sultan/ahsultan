import Image from "next/image";
import Link from "next/link";

// IMAGES --------------
import authorImg from '../../public/images/blog/comment-author2.jpg'

const Comments = () => {
  return (
    <>
      <div className="content mt-65">
        <h3 className="comment-title">Comments</h3>
        <div className="comment-body wow fadeInUp delay-0-2s">
          <div className="author-thumb">
            <Image
              width={100}
              height={100}
              src="/images/blog/comment-author1.jpg"
              alt="Author"
            />
          </div>
          <div className="content">
            <ul className="blog-meta">
              <li>
                <h6>William L. Jackson</h6>
              </li>
              <li>
                <Link href="#">May 25, 2023</Link>
              </li>
            </ul>
            <p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse molestiae consequatur qui dolorem eum fugiat voluptas
            </p>
            <Link className="read-more" href="#">
              Reply <i className="far fa-angle-right" />
            </Link>
          </div>
        </div>
        <div className="comment-body comment-child wow fadeInUp delay-0-2s">
          <div className="author-thumb">
            <Image src={authorImg} alt="Author" />
          </div>
          <div className="content">
            <ul className="blog-meta">
              <li>
                <h6>James M. Stovall</h6>
              </li>
              <li>
                <Link href="#">May 25, 2023</Link>
              </li>
            </ul>
            <p>
              At vero eoset accusamus dignissimos ducimus blanditiis sapiente
              praesentium voluptatum deleniti atque
            </p>
            <Link className="read-more" href="#">
              Reply <i className="far fa-angle-right" />
            </Link>
          </div>
        </div>
      </div>
      <div className="content">
        <form
          id="comment-form"
          className="comment-form form-style-one pt-65 pb-55 mt-55 wow fadeInUp delay-0-2s"
          name="comment-form"
          action="#"
          method="post"
        >
          <h5>Leave a Reply</h5>
          <div className="row mt-30">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="form-control"
                  defaultValue=""
                  placeholder="Full Name"
                  required=""
                />
                <label htmlFor="full-name" className="for-icon">
                  <i className="far fa-user" />
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  id="email-address"
                  name="email-address"
                  className="form-control"
                  defaultValue=""
                  placeholder="Email Address"
                  required=""
                />
                <label htmlFor="email-address" className="for-icon">
                  <i className="far fa-envelope" />
                </label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows={4}
                  placeholder="write message"
                  required=""
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mb-0">
                <button type="submit" className="theme-btn">
                  Leave A Reply <i className="far fa-angle-right" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Comments;
