import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "404 Error",
};

const E404 = () => {
  return (
    <main noFooter={true}>
      <section className="error-area pt-185 rpt-130 pb-130 rpb-100 rel z-1 text-center">
        <div className="container">
          <div className="error-content">
            <div className="image mb-85 rmb-55 wow fadeInUp delay-0-2s">
              <Image
                src="/images/shape/404-error.png"
                width={400}
                height={400}
                className="img-fluid"
                alt="Error"
              />{" "}
            </div>
            <div className="section-title mb-40 wow fadeInUp delay-0-2s">
              <h1>OPPS!</h1>
              <h2>This Page Are Can&apos;t be Found</h2>
            </div>

            <Link href="/" className="theme-btn wow fadeInUp delay-0-2s">
              Go To Homepage <i className="far fa-angle-right" />
            </Link>
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
export default E404;
