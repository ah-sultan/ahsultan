import Link from "next/link";

const Services = ({ extraClass }) => {
  const services = [
    {
      id: 1,
      title: "Brand Identity Design",
      text: "Dignissimos ducimus blanditiis praesen",
    },
    {
      id: 2,
      title: "Website Design",
      text: "Dignissimos ducimus blanditiis praesen",
    },
    {
      id: 3,
      title: "Mobile Application Design",
      text: "Dignissimos ducimus blanditiis praesen",
    },
    {
      id: 4,
      title: "Motion Graphics Design",
      text: "Dignissimos ducimus blanditiis praesen",
    },
    {
      id: 5,
      title: "Website Development",
      text: "Dignissimos ducimus blanditiis praesen",
    },
    {
      id: 6,
      title: "SEO & Digital Marketing",
      text: "Dignissimos ducimus blanditiis praesen",
    },
  ];
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
          {services.map((service) => (
            <div className="col-lg-6" key={service.id}>
              <div className="service-item wow fadeInUp delay-0-2s">
                <div className="number">
                  {service.id >= 9 ? service.id : `0${service.id}`}.
                </div>
                <div className="content">
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </div>
                <Link  href="/#" className="details-btn">
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