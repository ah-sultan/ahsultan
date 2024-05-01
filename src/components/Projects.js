import Link from "next/link";
import ProjectsCard from "./ProjectsCard";
import ProjectsData from "@/Data/ProjectsData";

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container">
        {Array.isArray(ProjectsData) &&
          ProjectsData.map((data, index) => {
            return <ProjectsCard key={index} {...data} index={index} />;
          })}

        <div className="project-btn text-center wow fadeInUp delay-0-2s">
          <Link className="theme-btn" href="/projects">
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
  );
};
export default Projects;

