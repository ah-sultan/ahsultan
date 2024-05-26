import Link from "next/link";
import Counter from "./Counter";
import Image from "next/image";

// IMAGES
import aboutImg from "../../public/images/about/about.jpg";
import btnImg1 from "../../public/images/about/btn-image1.png";
import btnImg2 from "../../public/images/about/btn-image2.png";
import aboutDotShape from "../../public/images/shape/about-dot.png";
import circleLogoImg from "../../public/images/shape/circle-logo.png";
import { contactInfo, socialMedia } from "@/Data/contactData";

const About = ({className}) => {
  return (
    <section id="about" className={`about-area rel z-1 ${className}`}>
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="about-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Me</span>
                  <h2>
                    I solve problems{" "}
                    <span>for agencies and individual clients</span> by building
                    websites.
                  </h2>
                  <p>
                    As a front-end developer, I&apos;m passionate about creating
                    beautiful, functional, and user-friendly web applications.
                    With skills in HTML, CSS, JavaScript, Tailwind, Bootstrap,
                    Jquery, React.js, and Next.js, I have a solid foundation in
                    the latest web development technologies.
                  </p>
                </div>
                <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                  <li>All time support</li>
                  <li>Bug Free Solution</li>
                  <li>Pixel Perfect design </li>
                  <li>Use latest technology</li>
                </ul>
                <hr />
                <div className="about-info-box mt-25 wow fadeInUp delay-0-2s p-0 border-0 bg-transparent">
                  <div className="info-box-item">
                    <i className="far fa-envelope" />
                    <div className="content">
                      <span>Email Us</span>
                      <br />
                      <Link href={`mailto:${contactInfo?.email}`}>
                        {contactInfo?.email}
                      </Link>
                    </div>
                  </div>
                  <div className="info-box-item">
                    <i className="fab fa-whatsapp" />
                    <div className="content">
                      <span>Make A Call</span>
                      <br />
                      <Link href={socialMedia?.whatsapp}>
                        {contactInfo?.phone}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-image-part wow fadeInUp delay-0-3s">
                <Image
                  src={aboutImg}
                  alt="About Me"
                  className="mt-4 md-mt-0 img-fluid"
                />
                <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                  <Image src={btnImg1} alt="Image" />
                  <h6>Experience Designer</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="about-btn btn-two wow fadeInRight delay-0-5s d-none">
                  <Image src={btnImg2} alt="Image" />
                  <h6>Mark J. Collins</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="dot-shape">
                  <Image src={aboutDotShape} alt="Shape" />
                </div>
              </div>
            </div>
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
  );
};
export default About;

export const About2 = () => {
  return (
    <section
      id="about"
      className="about-area-two rel z-1 pt-130 rpt-100 pb-130 rpb-100"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-content-two rel z-2 rmb-55">
              <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" />
                  Introduction of Myself
                </span>
                <h2>
                  i,m a digital <span>designer</span> studio connecting brands
                  to people through
                </h2>
              </div>
              <div className="text pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="row">
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-2s">
                    <small>born In</small>
                    <b>New york</b>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-3s">
                    <small>experience</small>
                    <b>20+ Years</b>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-4s">
                    <small>date of birth</small>
                    <b>27 June 1983</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-counter-wrap">
              <div className="row gap-40 justify-content-center">
                <div className="col-lg-5 col-6 mx-5">
                  <div className="counter-item counter-text-wrap mb-25 wow fadeInUp delay-0-2s">
                    <Counter end={8} extraClass={"k"} />
                    <span className="counter-title">project completed</span>
                  </div>
                </div>
                <div className="col-lg-5 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                    <Counter end={8} extraClass={"k"} />
                    <span className="counter-title">Awward achievmentd</span>
                  </div>
                </div>
                <div className="col-lg-5 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                    <Counter end={80} extraClass={"k"} />
                    <span className="counter-title">Satisfied customers</span>
                  </div>
                </div>
              </div>
              <div className="counter-logo">
                <Image
                  className="wow zoomIn delay-0-2s"
                  src={circleLogoImg}
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
