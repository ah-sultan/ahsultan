import AboutMe from "@/components/AboutMe/AboutMe";
import Contact from "@/components/Contact/Contact";
import Counter from "@/components/Counter/Counter";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import SectionLine from "@/components/SectionLine/SectionLine";
import Service from "@/components/Services/Service";
import Skills from "@/components/Skills/Skills";
import Testimonal from "@/components/Testimonial/Testimonal";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <AboutMe/>
      <SectionLine/>
      <Service/>
      <SectionLine/>
      <Skills/>
      <Counter/>
      <Portfolio/>
      <SectionLine/>
      <Testimonal/>
      <Contact/>     
    </>
  )
}
