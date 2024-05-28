import PageBanner from "@/components/PageBanner";
import Link from "next/link";

import Image from "next/image";
import { getProjects } from "@/lib/getData";
import { ItemsNotFound } from "@/components/ItemsNotFound";

export const metadata = {
  title: "All Projects - Sultan Ahmed Portfolio Website",
};

const ProjectMasonry = async () => {
  const projectData = await getProjects();
  return (
    <main>
      <PageBanner pageName={"My All Project "} />
      <section className="projects-masonry-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row">
            {!Array.isArray(projectData) && <ItemsNotFound items="Projects" />}
            {Array.isArray(projectData) &&
              projectData.map((data, index) => {
                return (
                  <div className="col-xl-4 col-md-6 item" key={index}>
                    <div className="project-item style-three wow fadeInUp delay-0-2s">
                      <div className="project-image">
                        <Image
                          src={data?.thumbnail}
                          alt={data?.title}
                          width={700}
                          height={1200}
                          className="img-fluid h-auto"
                        />
                      </div>
                      <div className="project-content">
                        <Link href={`projectDetails/${data?._id}`}>
                          <i className="far fa-arrow-right" />
                        </Link>
                        <span className="sub-title">{data?.category}</span>
                        <Link href={`projectDetails/${data?._id}`}>
                          <h4>{data?.title}</h4>
                        </Link>
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
