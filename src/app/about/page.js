import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonials";
import Link from "next/link";
import Image from "next/image";

// IMAGES ----------------
import aboutPageImg from "../../../public/images/about/about-page.jpg";
import btnImg1 from "../../../public/images/about/btn-image1.png";
import btnImg2 from "../../../public/images/about/btn-image2.png";
import dots2Img from "../../../public/images/shape/about-dots-two.png";
import faq1 from "../../../public/images/faqs/faq-one.jpg";
import faq2 from "../../../public/images/faqs/faq-two.jpg";

export const metadata = {
  title: "About Me",
};

const About = () => {
  return (
    <main>
      <PageBanner pageName={"About Me"} />

      <div className="about-main-image-area pt-40">
        <div className="container">
          <div className="about-main-image wow fadeInUp delay-0-5s">
            <Image src={aboutPageImg} alt="About Page" />
          </div>
        </div>
      </div>
      {/* About Page Area start */}
      <section className="about-page-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="about-page-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Me</span>
                  <h2>
                    Professional <span>Problem Solutions</span> For Digital
                    Products
                  </h2>
                  <p>
                    At vero eos et accusamus etodio dignissimos ducimus
                    praesentium voluptatum corrupti quos dolores quas molestias
                    excepturi sint occaecati cupiditate provident qui officia
                    deserunt mollitia animi, id est laborum et dolorum
                  </p>
                </div>
                <ul className="list-style-one two-column pb-30 wow fadeInUp delay-0-2s">
                  <li>Branding &amp; Design</li>
                  <li>Digital Marketing</li>
                  <li>Web Development</li>
                  <li>Product Design</li>
                </ul>
                <Link href="/" className="theme-btn wow fadeInUp delay-0-2s">
                  Learn More <i className="far fa-angle-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-right-part wow fadeInLeft delay-0-3s">
                <div className="experience-years">
                  <b>25+</b>
                  <h5>Years Of Experience</h5>
                </div>
                <div className="about-btn one wow fadeInRight delay-0-4s">
                  <Image src={btnImg1} alt="Image" />
                  <h6>Experience Designer</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="about-btn two wow fadeInRight delay-0-5s">
                  <Image src={btnImg2} alt="Image" />
                  <h6>Mark J. Collins</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="about-btn three wow fadeInRight delay-0-4s">
                  <Image src={btnImg1} alt="Image" />
                  <h6>Experience Designer</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="dot-shape one">
                  <Image src={dots2Img} alt="Shape" />
                </div>
                <div className="dot-shape two">
                  <Image src={dots2Img} alt="Shape" />
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
      {/* About Page Area end */}
      {/* Services Area start */}
      <Services extraClass={"bgc-black"} />
      {/* Services Area end */}
      {/* FAQs Area start */}
      <section id="faqs" className="faqs-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-image-part rmb-55 wow fadeInUp delay-0-2s">
                <div className="image-one">
                  <Image alt="FAQs IMAGE" src={faq1} />
                </div>
                <div className="image-two">
                  <Image alt="FAQs IMAGE" src={faq2} />
                </div>
                <div className="square-shape" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content-part rel z-2">
                <div className="section-title mb-40 wow fadeInUp delay-0-4s">
                  <h2>
                    Professional Solutions For Your <span>Digital Product</span>{" "}
                    Design and development
                  </h2>
                </div>
                <Faq />
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
      {/* FAQs Area end */}
      {/* Testimonial Area start */}
      <Testimonial />
      {/* Testimonial Area end */}
      {/* Client Log start */}
      <Clients />
    </main>
  );
};
export default About;
