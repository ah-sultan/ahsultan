import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import ProjectData from "@/Data/ProjectsData";

import dynamic from "next/dynamic";
import Image from "next/image";

export const metadata = {
  title: "Projects Masonry",
};

const ProjectMasonry = () => {
  return (
    <main>
      <PageBanner pageName={"My All Project "} />
      <section className="projects-masonry-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row">
            {Array.isArray(ProjectData) &&
              ProjectData.map((data, index) => {
                return (
                  <div className="col-xl-4 col-md-6 item" key={index}>
                    <div className="project-item style-three wow fadeInUp delay-0-2s">
                      <div className="project-image">
                        <Image
                          src={data.thumbnail}
                          alt={data.title}
                          width={700}
                          height={1200}
                          className="img-fluid h-auto"
                        />
                      </div>
                      <div className="project-content">
                        <Link className="project-btn" href="/project-details">
                          <i className="far fa-arrow-right" />
                        </Link>
                        <span className="sub-title">{data.category}</span>
                        <h4>
                          <Link  href="project-details">
                            {data.title}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div className="project-btn mt-25 text-center wow fadeInUp delay-0-2s d-none">
              <button className="theme-btn">
                Show More <i className="far fa-angle-right" />
              </button>
            </div>
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
export default ProjectMasonry;
