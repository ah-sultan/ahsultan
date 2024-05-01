import Image from "next/image";
import Link from "next/link";

const ProjectsCard = (props) => {
  return (
    <>
      <div className="row align-items-center pb-25">
        <div
          className={`col-lg-6 ${
            props.index % 2 === 0 ? "order-first" : "order-last"
          } `}
        >
          <div className="project-image wow fadeInLeft delay-0-2s">
            <Image
              width={630}
              height={500}
              src={props.thumbnail}
              alt={props.title || "Projects"}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="project-content wow fadeInRight delay-0-2s">
            <span className="sub-title">{props.category}</span>
            <h2>
              <Link href="project-details">{props.title}</Link>
            </h2>
            <p>{props.description}</p>
            <Link href="/project-details" className="details-btn">
              <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
