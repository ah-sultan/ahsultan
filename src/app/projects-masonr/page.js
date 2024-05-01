import PageBanner from "@/components/PageBanner";
import Link from "next/link";

import dynamic from "next/dynamic";
const ProjectGridIsotop = dynamic(
  () => import("@/components/ProjectGridIsotop"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Projects Grid",
};

const ProjectsPage = () => {
  return (
    <main>
      <PageBanner pageName={"Project Grid View"} />
      <section className="projects-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <ProjectGridIsotop />
          <div className="project-btn text-center wow fadeInUp delay-0-2s">
            <Link  href="/projects" className="theme-btn">
              View More Projects <i className="far fa-angle-right" />
            </Link>
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
    </main>
  );
};
export default ProjectsPage;
