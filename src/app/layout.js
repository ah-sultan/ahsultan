import { DM_Sans, Inter, Lexend, Syne, Unbounded } from "next/font/google";

// import Preloader from "@/layout/Preloader";
import "swiper/css";
import "react-quill/dist/quill.snow.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/animate.min.css";
import "@/assets/css/flaticon.min.css";
import "@/assets/css/fontawesome-5.14.0.min.css";
import "@/assets/css/nice-select.min.css";
import "@/assets/css/slick.min.css";
import "./styles/style.css";
import "./globals.css";
import Preloader from "@/components/Shared/Preloader";
import Header from "@/components/Shared/Header/Header";
import Footer from "@/components/Shared/Footer";
import SideBar from "@/components/Shared/SideBar";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** google fonts */
const primaryFont = Lexend({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-primary",
  display: "swap",
});
const secondaryFont = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-secondary",
  display: "swap",
});

/** Font family */
const fontFamily = `${primaryFont.variable} ${secondaryFont.variable} `;

export const metadata = {
  title: "Sultan Ahmed Portfolio Website",
  description: "I love building websites that are attractive, useful, and easy to use. I can design websites for all sorts of needs, like portfolios, blogs, businesses, real estate agents, doctors, and even personal websites. I make sure they look great, work smoothly, and are free of mistakes.",
  keywords : "HTML, CSS, JavaScript, UX/UI Design, Responsive Design, Wireframes, Prototyping, SEO (Search Engine Optimization), Accessibility, Typography, Web designer, web design, web development, web application developer, wordpress, figma"
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className={`${fontFamily} scroll-smooth`}>
      <body>
        <div className="page-wrapper">
          <Preloader />
          <Header />
          <SideBar />
          {children}
          <Footer />
          <ToastContainer theme="dark"/>
        </div>
      </body>
    </html>
  );
}
