import Link from "next/link";
import Logo from "./Header/Logo";
import { auth } from "@/auth";
import SignOutBtn from "../Auth/SignOutBtn";

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
                    <Logo />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                <h6 className="footer-title">Quick Link</h6>
                <ul>
                  <li>
                    <Link href="services">Service</Link>
                  </li>
                  <li>
                    <Link href="projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="services#pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="about#faqs">Faqs</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
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
                    Sign Up <i className="far fa-angle-right" />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div className="footer-widget widget_contact_info wow fadeInUp delay-0-6s">
                <h6 className="footer-title">Address</h6>
                <ul>
                  <li>
                    <i className="far fa-map-marker-alt" /> 55 Main Street, 2nd
                    block, New York City
                  </li>
                  <li>
                    <i className="far fa-envelope" />{" "}
                    <Link href="mailto:support@gmail.com">
                      support@gmail.com
                    </Link>
                  </li>
                  <li>
                    <i className="far fa-phone" />{" "}
                    <Link href="callto:+880(123)45688">+880 (123) 456 88</Link>
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
                  <Link href="#">Facebook</Link>
                </li>
                <li>
                  <Link href="#">Twitter</Link>
                </li>
                <li>
                  <Link href="#">Instagram</Link>
                </li>
                <li>
                  <Link href="#">LinkedIn</Link>
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
