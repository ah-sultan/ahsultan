import Link from "next/link";
import Counter from "./Counter";
import React from "react";

const counterData = [
  { id: 1, text: "Months Of Experience", value: "36", valueType: "plus" },
  { id: 2, text: "Project Complete", value: "10", valueType: "plus" },
  { id: 3, text: "Client Satisfactions", value: "99", valueType: "percent" },
];

const expertTitle = [
  "Web Designer",
  "Web Developer",
  "Wordpress Expert",
  "Front End Developer",
  "React Js Developer",
  "Next Js Developer",
  "UI/UX Designer",
  "Redux Expert",
];

const Hero = () => {
  return (
    <section id="home" className="main-hero-area pt-150 pb-80 rel z-1">
      <div className="container container-1620">
        <div className="row align-items-center">
          <div className="col-lg-8 col-sm-12 mb-4 md-mb-0 ">
            <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
              <span className="h2">Hello, i’m </span>
              <h1>
                <b>Sultan Ahmed</b> <br /> web designer
              </h1>
              <p className="hero-desc">
                I love building websites that are attractive, useful, and easy
                to use. I can design websites for all sorts of needs, like
                portfolios, blogs, businesses, real estate agents, doctors, and
                even personal websites. I make sure they look great, work
                smoothly, and are free of mistakes.
              </p>
              <div className="hero-btns">
                <Link href="/contact" className="theme-btn">
                  Hire Me <i className="far fa-angle-right" />
                </Link>
                <Link href="/contact" className="read-more">
                  Download Resume <i className="far fa-angle-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3 col-sm-8 mt-4 md-mt-0 ">
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
      <div className="hero-slider">
        <ul className="slider-slide">
          {Array.isArray(expertTitle) &&
            expertTitle.map((title, index) => {
              return (
                <React.Fragment key={index}>
                  <li className="text" key={index}>
                    {title}
                  </li>
                  <li>
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.6581 11.3731L23.2001 11.2465L23.0163 10.7211L20.935 4.7699L20.7554 4.25634L20.2588 4.47857L15.1594 6.76065L15.7249 1.04926L15.7792 0.5H15.2273H8.88582H8.3344L8.38821 1.04879L8.95432 6.82314L3.75808 4.47918L3.24824 4.2492L3.07661 4.78153L1.15791 10.7328L0.991277 11.2496L1.5201 11.3731L7.08621 12.6728L3.25167 16.7893L2.87561 17.193L3.31428 17.5276L8.38745 21.3975L8.83339 21.7377L9.12032 21.2558L12.0424 16.3479L14.9939 21.2576L15.2825 21.7378L15.7269 21.3966L20.7675 17.5267L21.199 17.1955L20.8327 16.7934L17.0813 12.6753L22.6581 11.3731Z"
                        fill="#FFD300"
                        stroke="#080808"
                      />
                    </svg>
                  </li>
                </React.Fragment>
              );
            })}
        </ul>
        <ul className="slider-slide">
          {Array.isArray(expertTitle) &&
            expertTitle.map((title, index) => {
              return (
                <React.Fragment key={index}>
                  <li className="text" key={index}>
                    {title}
                  </li>
                  <li>
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.6581 11.3731L23.2001 11.2465L23.0163 10.7211L20.935 4.7699L20.7554 4.25634L20.2588 4.47857L15.1594 6.76065L15.7249 1.04926L15.7792 0.5H15.2273H8.88582H8.3344L8.38821 1.04879L8.95432 6.82314L3.75808 4.47918L3.24824 4.2492L3.07661 4.78153L1.15791 10.7328L0.991277 11.2496L1.5201 11.3731L7.08621 12.6728L3.25167 16.7893L2.87561 17.193L3.31428 17.5276L8.38745 21.3975L8.83339 21.7377L9.12032 21.2558L12.0424 16.3479L14.9939 21.2576L15.2825 21.7378L15.7269 21.3966L20.7675 17.5267L21.199 17.1955L20.8327 16.7934L17.0813 12.6753L22.6581 11.3731Z"
                        fill="#FFD300"
                        stroke="#080808"
                      />
                    </svg>
                  </li>
                </React.Fragment>
              );
            })}
        </ul>
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
