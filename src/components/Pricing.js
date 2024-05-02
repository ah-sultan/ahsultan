import Link from "next/link";

const Pricing = ({ extraClass }) => {
  return (
    <section className={`pricing-area pt-130 rpt-100 rel z-1 ${extraClass}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Pricing Package</span>
              <h2>
                Amazing <span>Pricing</span> For your Projects
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6">
            <div className="pricing-item wow fadeInUp delay-0-2s">
              <div className="pricing-header">
                <h4 className="title">Basic Plan</h4>
                <p className="save-percent">
                  Try Out Basic Plan Save <span>20%</span>
                </p>
                <span className="price">19.95</span>
              </div>
              <div className="pricing-details">
                <p>
                  Sed perspiciatis unde natus totam see rem aperiam eaque
                  inventore
                </p>
                <ul>
                  <li>Website Design</li>
                  <li>Mobile Apps Design</li>
                  <li>Product Design</li>
                  <li className="unable">Digital Marketing</li>
                  <li className="unable">Custom Support</li>
                </ul>
                <Link href="/contact" className="theme-btn">
                  Choose Package <i className="far fa-angle-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="pricing-item wow fadeInUp delay-0-4s">
              <div className="pricing-header">
                <h4 className="title">Standard Plan</h4>
                <p className="save-percent">
                  Try Out Basic Plan Save <span>35%</span>
                </p>
                <span className="price">19.95</span>
              </div>
              <div className="pricing-details">
                <p>
                  Sed perspiciatis unde natus totam see rem aperiam eaque
                  inventore
                </p>
                <ul>
                  <li>Website Design</li>
                  <li>Mobile Apps Design</li>
                  <li>Product Design</li>
                  <li>Digital Marketing</li>
                  <li>Custom Support</li>
                </ul>
                <Link  href="/contact" className="theme-btn">
                  Choose Package <i className="far fa-angle-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="pricing-item wow fadeInUp delay-0-6s">
              <div className="pricing-header">
                <h4 className="title">Basic Plan</h4>
                <p className="save-percent">
                  Try Out Basic Plan Save <span>45%</span>
                </p>
                <span className="price">19.95</span>
              </div>
              <div className="pricing-details">
                <p>
                  Sed perspiciatis unde natus totam see rem aperiam eaque
                  inventore
                </p>
                <ul>
                  <li>Website Design</li>
                  <li>Mobile Apps Design</li>
                  <li>Product Design</li>
                  <li>Digital Marketing</li>
                  <li>Custom Support</li>
                </ul>
                <Link  href="/contact" className="theme-btn">
                  Choose Package <i className="far fa-angle-right" />
                </Link>
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
export default Pricing;


