import Faq from "./Faq";
import Image from "next/image";

import faq1 from "@/../public/images/faqs/faq-one.jpg";
import faq2 from "@/../public/images/faqs/faq-two.jpg";

const FaqSection = ({className}) => {
  return (
    <>
      <section id="faqs" className={`faqs-area rpy-100 xs-pt-0 xs-pb-60 rel z-1 ${className}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-image-part rmb-55 wow fadeInUp delay-0-2s">
                <div className="image-one">
                  <Image alt="FAQs IMAGE" src={faq1} className="img-fluid" />
                </div>
                <div className="image-two">
                  <Image alt="FAQs IMAGE" src={faq2} className="img-fluid" />
                </div>
                <div className="square-shape" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content-part rel z-2">
                <div className="section-title mb-40 wow fadeInUp delay-0-4s">
                  <h2>
                    Most Common <span>Frequently Asked Questions.</span>
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
    </>
  );
};

export default FaqSection;
