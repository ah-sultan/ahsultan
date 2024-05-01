import Link from "next/link";
import Counter from "./Counter";

const counterData = [
  { id: 1, text: "Years Of Experience", value: "13", valueType: "plus" },
  { id: 2, text: "Project Complete", value: "8", valueType: "k-plus" },
  { id: 3, text: "Client Satisfactions", value: "99", valueType: "percent" },
];

const Hero = () => {
  return (
    <section id="home" className="main-hero-area pt-150 pb-80 rel z-1">
      <div className="container container-1620">
        <div className="row align-items-center">
          <div className="col-lg-8 col-sm-7">
            <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
              <span className="h2">Hello, i’m </span>
              <h1>
                <b>Sultan Ahmed</b> <br /> web designer
              </h1>
              <p className="hero-desc">
                We denounce with righteous indignation dislike demoralized by
                the charms of pleasure. We denounce with righteous indignation
                dislike demoralized by the charms of pleasure. We denounce with
                righteous indignation dislike demoralized by the charms of
                pleasure
              </p>
              <div className="hero-btns">
                <Link  href="/contact" className="theme-btn">
                  Hire Me <i className="far fa-angle-right" />
                </Link>
                <Link href="/contact" className="read-more">
                  Download Resume <i className="far fa-angle-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-5 order-lg-3 ">
            <div className="hero-counter-wrap ms-lg-auto rmb-55 wow fadeInUp delay-0-4s">
              {counterData.map((count) => (
                <div className="counter-item counter-text-wrap" key={count.id}>
                  <Counter end={count.value} extraClass={count.valueType} />
                  <span className="counter-title">{count.text}</span>
                </div>
              ))}
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
export default Hero;

