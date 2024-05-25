import Link from "next/link";
import ProjectsCard from "./ProjectsCard";
import ProjectsData from "@/Data/ProjectsData";
import { getProjects } from "@/lib/getData";

const Projects = async () => {
  const projectData = await getProjects();
  return (
    <section
      id="portfolio"
      className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container">
        {Array.isArray(projectData) &&
          projectData.map((data, index) => {
            return (
              <ProjectsCard
                _id={data._id}
                index={index}
                title={data.title}
                thumbnail={data.thumbnail}
                category={data.category}
                summary={data.summary}
              />
            );
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
