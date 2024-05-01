import { DM_Sans, Inter, Lexend, Syne, Unbounded } from "next/font/google";

// import Preloader from "@/layout/Preloader";
import 'swiper/css';
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
  title: "AH",
  description: "Generated by create next app",
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
        </div>
      </body>
    </html>
  );
}
