import Link from "next/link";
import Logo from "./Header/Logo";
import { auth } from "@/auth";
import SignOutBtn from "../Auth/SignOutBtn";
import { contactInfo, socialMedia } from "@/Data/contactData";

const Footer = async () => {
  const session = await auth();

  return (
    <footer className="main-footer rel z-1">
      <div className="footer-top-wrap bgc-black pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-12">
              <div className="footer-widget widget_logo wow fadeInUp delay-0-2s">
                <div className="footer-logo">
                  <Link href="/">
                    <Logo type="dark" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                <h6 className="footer-title">Quick Link</h6>
                <ul>
                  {[
                    { title: "Home", path: "/" },
                    { title: "About", path: "/about" },
                    { title: "Portfolio", path: "/portfolio" },
                    { title: "Blog", path: "/blogs" },
                    { title: "Contact", path: "/contact" },
                  ].map((data, index) => {
                    return (
                      <li key={index}>
                        <Link href={data?.path}>{data?.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="footer-widget widget_newsletter wow fadeInUp delay-0-4s">
                <form action="#">
                  <label htmlFor="email-address">
                    <i className="far fa-envelope" />
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    placeholder="Email Address"
                    required=""
                  />
                  <button>
                    Subscribe
                    <i className="far fa-angle-right" />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div className="footer-widget widget_contact_info wow fadeInUp delay-0-6s">
                <h6 className="footer-title">Address</h6>
                <ul>
                  <li>
                    <i className="far fa-map-marker-alt" />{" "}
                    {contactInfo?.address}
                  </li>
                  <li>
                    <i className="far fa-envelope" />{" "}
                    <Link target="_blank" href={`mailto:${contactInfo?.email}`}>
                      {contactInfo?.email}
                    </Link>
                  </li>
                  <li>
                    <i className="far fa-phone" />{" "}
                    <Link target="_blank" href={`callto:${contactInfo?.phone}`}>
                      {contactInfo?.phone}
                    </Link>
                  </li>
                  {session && (
                    <li>
                      <SignOutBtn />
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-20 pb-5 rpt-25">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>
                  Copyright by <Link href="/">Ah Sultan</Link> All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <Link target="_blank" href={socialMedia?.github}>
                    Github
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href={socialMedia?.linkedin}>
                    linkedin
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href={socialMedia?.x}>
                    Twitter-X
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href={socialMedia?.whatsapp}>
                    Whatsapp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target d-inline-block">
            <span className="fas fa-angle-double-up" />
          </button>
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
    </footer>
  );
};

export default Footer;
