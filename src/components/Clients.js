import Image from "next/image";
import Link from "next/link";

const Clients = () => {
  return (
    <div className="client-logo-area rel z-1 pt-130 rpt-100 pb-60 d-none">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center pt-5 mb-65 wow fadeInUp delay-0-2s">
              <h6>
                I’ve <span>1253+ Global Clients</span> &amp; lot’s of Project
                Complete
              </h6>
            </div>
          </div>
        </div>
        <div className="client-logo-wrap">
          {[
            "/images/client-logos/client-logo1.png",
            "/images/client-logos/client-logo2.png",
            "/images/client-logos/client-logo3.png",
            "/images/client-logos/client-logo4.png",
            "/images/client-logos/client-logo5.png",
            "/images/client-logos/client-logo6.png",
            "/images/client-logos/client-logo7.png",
            "/images/client-logos/client-logo8.png",
          ].map((data, index) => {
            return (
              <Link
                key={index}
                
                href="/contact"
                className="client-logo-item wow fadeInUp delay-0-2s"
              >
                <Image
                  src={data}
                  alt="Client Logo"
                  width={200}
                  height={150}
                  className="img-fluid"
                />
              </Link>
            );
          })}
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
    </div>
  );
};
export default Clients;


