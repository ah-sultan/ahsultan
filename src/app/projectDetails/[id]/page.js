import PageBanner from "@/components/PageBanner";
import RelatedProject from "@/components/RelatedProject";
import ProjectData from "@/Data/ProjectsData";
import { findProject, getProjects } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
  // read route params
  const { id } = params;
  const project = await findProject(id);
 
 
  return {
    title: project?.title,
    description : project?.summary,
  }
}
 

const ProjectDetails = async ({ params }) => {
  const { id } = params;
  const project = await findProject(id);
  const allProjects = await getProjects()
  const hasAllProject = Array.isArray(allProjects)
  return (
    <main>
      <PageBanner pageName={"Mobile Application Design"} />
      {/* ProjectDetails Area start */}
      <section className="projects-details-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="projects-details-image mb-50 wow fadeInUp delay-0-2s">
            <Image
              src={project?.bannerImage}
              alt={project?.title}
              width={1290}
              height={590}
              className="img-fluid"
            />
          </div>
          <div className="row gap-120 mb-4 pn-4">
            <div className="col-lg-8">
              <div
                className="project-details-content wow fadeInUp delay-0-2s"
                dangerouslySetInnerHTML={{ __html: project?.body }}
              />
            </div>
            {/* =================================
            PROJECT INFO 
            =================================== */}
            <div className="col-lg-4 wow fadeInUp delay-0-4s">
              <div
                className="project-details-info rmb-55"
                style={{
                  backgroundImage: "url(/images/projects/project-info-bg.png)",
                }}
              >
                <div className="pd-info-item">
                  <span>Category</span>
                  <h5>{project?.category}</h5>
                </div>
                <div className="pd-info-item">
                  <span>View Project</span>
                  <Link href={"https://www."+project?.viewProject}>
                    <h5>{project?.viewProject}</h5>
                  </Link>
                </div>
                <div className="pd-info-item">
                  <span>Duration</span>
                  <h5>{project?.duration}</h5>
                </div>
                <div className="pd-info-item">
                  <span>Technologies</span>
                  <h5>{project?.technologies}</h5>
                </div>
              </div>
            </div>
          </div>
          <hr />
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
      {/* Project Details Area end */}

      {/* Related Projects Area start */}
      {hasAllProject && 
      <section className="related-projects-area pb-70 rpb-40 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <h2>Related Projects</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <RelatedProject data={hasAllProject && JSON.stringify(allProjects)}  />
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
      }
    </main>
  );
};
export default ProjectDetails;


