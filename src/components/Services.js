import { getServices } from "@/lib/getData";
import Link from "next/link";

const Services = async ({ extraClass }) => {
  const services = await getServices();
  return (
    <section
      id="services"
      className={`services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1 ${extraClass}`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Popular Services</span>
              <h2>
                My <span>Special Service</span> For your Business Development
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {Array.isArray(services) &&
            services.map((data) => (
              <div className="col-lg-6" key={data._id}>
                <div className="service-item wow fadeInUp delay-0-2s">
                  <div className="number">{data.serviceNo}</div>
                  <div className="content">
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                  </div>
                  <Link href="/" className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
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
export default Services;
