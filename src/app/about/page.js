import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import Link from "next/link";
import Image from "next/image";
import About from "@/components/About";

// IMAGES ----------------
import aboutPageImg from "../../../public/images/about/about-page.jpg";
import Testimonial from "@/components/Testimonial";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "About Me - Sultan Ahmed Portfolio Website",
};

const AboutPage = () => {
  return (
    <main>
      <PageBanner pageName={"About Me"} />

      <div className="about-main-image-area pt-40">
        <div className="container">
          <div className="about-main-image wow fadeInUp delay-0-5s">
            <Image src={aboutPageImg} alt="About Page" className="img-fluid" />
          </div>
        </div>
      </div>
      {/* About Page Area start */}
      <About />
      {/* About Page Area end */}
      {/* Services Area start */}
      <Services extraClass={"bgc-black "} />
      {/* Services Area end */}
      {/* FAQs Area start */}
      <FaqSection className="pb-80" />
      <Testimonial />
      <Clients />
    </main>
  );
};
export default AboutPage;
