import Link from "next/link";
import React from "react";

import whatIDoImg2 from "@/../public/images/about/what-i-do1.jpg";
import whatIDoImg1 from "@/../public/images/about/what-i-do2.jpg";
import Image from "next/image";
const WhatIdo = () => {
  return (
    <section className="what-i-do-area pt-25 rpt-0 rel z-1 ">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="what-i-do-images rmb-55 wow fadeInUp delay-0-2s">
              <div className="first-image">
                <Image src={whatIDoImg1} alt="What I do" />
              </div>
              <div className="">
                <Image
                  src={whatIDoImg2}
                  alt="What I do"
                  className="last-image rounded-3"
                  style={{ borderRadius: 40 }}
                />
              </div>
              <div className="icon first">
                <i className="flaticon-asterisk-1" />
              </div>
              <div className="icon last">
                <i className="flaticon-asterisk-1" />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="what-i-do-content wow fadeInUp delay-0-4s">
              <div className="section-title mb-40">
                <span className="sub-title mb-15">What I Do</span>
                <h2>
                  Web <span>design and development </span>solution.
                </h2>
                <p>
                  Hi there, if you need design and a website for you brand. you
                  are in the right place. I can help to build a website for your
                  brand
                </p>
                <p>
                  I if you be confused about design. I will help you whats are
                  about Design, Domain Hosting etc. so feel free and{" "}
                  <Link href="/contact" className="text-primary">
                    contact with me
                  </Link>
                </p>
              </div>
              <Link className="theme-btn" href="/service">
                Contact Now
                <i className="far fa-angle-right" />
              </Link>
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

export default WhatIdo;
