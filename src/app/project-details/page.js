import PageBanner from "@/components/PageBanner";
import RelatedProject from "@/components/RelatedProject";
import ProjectData from '@/Data/ProjectsData'
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects Details",
};

const ProjectDetails = () => {
  return (
    <main>
      <PageBanner pageName={"Mobile Application Design"} />
      {/* ProjectDetails Area start */}
      <section className="projects-details-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="projects-details-image mb-50 wow fadeInUp delay-0-2s">
            <Image
              src="/images/projects/project-details.jpg"
              alt="Project Details"
              width={1290}
              height={590}
              className="img-fluid"
            />
          </div>
          <div className="row gap-120">
            <div className="col-lg-8">
              <div className="project-details-content wow fadeInUp delay-0-2s">
                <h3>We Create digital Product For Business</h3>
                <p className="big-letter">
                  sSed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque seeney laudantium totam rem
                  aperiam eaque ipsa quae abillo inventore veritatis
                </p>
                <p>
                  Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aufugit sed quia consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                  porro quisquam estqui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid consequature
                </p>
                <ul className="list-style-one two-column mt-50 mb-40">
                  <li>Branding &amp; Design</li>
                  <li>Digital Marketing</li>
                  <li>Web Development</li>
                  <li>Product Design</li>
                  <li>Mobile Apps Design</li>
                  <li>System &amp; Guide</li>
                  <li>Graphics Design</li>
                  <li>Content Management</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp delay-0-4s">
              <div
                className="project-details-info rmb-55"
                style={{
                  backgroundImage: "url(/images/projects/project-info-bg.png)",
                }}
              >
                <div className="pd-info-item">
                  <span>Category</span>
                  <h5>Product Design</h5>
                </div>
                <div className="pd-info-item">
                  <span>Clients</span>
                  <h5>X_Design Studio</h5>
                </div>
                <div className="pd-info-item">
                  <span>Location</span>
                  <h5>Melbourne, Australia</h5>
                </div>
                <div className="pd-info-item">
                  <span>Published</span>
                  <h5>September 25, 2023</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-15">
            <div className="col-lg-4 col-sm-6">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <Image
                  width={410}
                  height={320}
                  className="img-fluid"
                  src="/images/projects/project-middle1.jpg"
                  alt="Project Middle"
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="image mb-30 wow fadeInUp delay-0-4s">
                <Image
                  width={410}
                  height={320}
                  className="img-fluid"
                  src="/images/projects/project-middle2.jpg"
                  alt="Project Middle"
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="image mb-30 wow fadeInUp delay-0-6s">
                <Image
                  width={410}
                  height={320}
                  className="img-fluid"
                  src="/images/projects/project-middle3.jpg"
                  alt="Project Middle"
                />
              </div>
            </div>
          </div>
          <div className="project-bottom-content mb-50 wow fadeInUp delay-0-2s">
            <h3 className="title mb-25">Project Summery</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isnt anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
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
            <RelatedProject projectData={ProjectData}/>
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
export default ProjectDetails;
