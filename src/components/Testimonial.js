import { getTestimonialData } from "@/lib/getData";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = async () => {
  const testimonials = await getTestimonialData();
  const hasTestimonials = Array.isArray(testimonials);

  return (
    <>
      <section className="testimonials-area rel z-1">
        <div className="for-bgc-black py-130 rpy-100">
          <div className="container">
            <div className="row gap-90">
              <div className="col-lg-6 col-xl-4">
                <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-40">
                    <span className="sub-title mb-15">
                      Clients Testimonials
                    </span>
                    <h2>
                      what my <span>Clients Say</span>
                    </h2>
                    <p>
                      When client notification is our top priority, their
                      feedback is consistently awesome
                    </p>
                  </div>
                  <div className="slider-arrows d-flex">
                    <button className="testimonial-prev-btn d-flex align-items-center justify-content-center slick-arrow">
                      <i className="fal fa-arrow-left" />
                    </button>
                    <button className="testimonial-next-btn d-flex align-items-center justify-content-center slick-arrow">
                      <i className="fal fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-8">
                <div className="testimonials-wrap"></div>
                {hasTestimonials ? (
                  <TestimonialSlider data={JSON.stringify(testimonials)} />
                ) : (
                  <h3>Testimonials Not Found</h3>
                )}
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

export default Testimonial;
