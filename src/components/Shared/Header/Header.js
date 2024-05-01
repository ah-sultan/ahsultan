"use client";

import { noxfolioUtilits } from "@/utility";
import Link from "next/link";
import { useEffect, useState } from "react";
import MultiMenu, { OnePageMenu } from "./HeaderMenu";
import HeaderMenu from "./HeaderMenu";
import Image from "next/image";
import Logo from "./Logo";

const Header = ({ onePageMenu }) => {
  useEffect(() => {
    noxfolioUtilits.stickyNav();
  }, []);

  const toggleSidebar = () => {
    document.querySelector("body").classList.add("side-content-visible");
  };

  const [toggle, setToggle] = useState(false);

  return (
    <header className="main-header menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link  href="/">
                  <Logo />
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix mx-auto">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link  href="/">
                      <Logo />
                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle me-4"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                    onClick={() => setToggle(!toggle)}
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div
                  className={`navbar-collapse collapse clearfix ${
                    toggle ? "show" : ""
                  }`}
                >
                  <HeaderMenu />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns d-none d-lg-block">
              {/* menu sidbar */}
              <div className="menu-sidebar">
                <button onClick={() => toggleSidebar()}>
                  <Image
                    width={20}
                    height={20}
                    src="/images/shape/sidebar-tottler.svg"
                    alt="Toggler"
                    className="img-fluid"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

export default Header;
