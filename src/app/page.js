import About from "@/components/About";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import WorkingProcess from "@/components/WorkingProcess";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import Testimonial from "@/components/Testimonial";

export const metadata = {
  title: "Home - Sultan Ahmed Portfolio Website",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WorkingProcess />
      <Services />
      <Skill />
      <Projects />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
      <Clients />
    </main>
  );
}
