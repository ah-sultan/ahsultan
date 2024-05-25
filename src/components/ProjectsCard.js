import Image from "next/image";
import Link from "next/link";

const ProjectsCard = ({
  index,
  _id,
  title,
  thumbnail,
  category,
  summary
}) => {
  return (
    <>
      <div className="row align-items-center pb-25">
        <div
          className={`col-lg-6 ${
            index % 2 === 0 ? "order-lg-first" : "order-lg-last"
          } `}
        >
          <div className="project-image wow fadeInLeft delay-0-2s">
            <Image
              width={630}
              height={500}
              src={thumbnail}
              alt={title || "Projects"}
              className="
              img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="project-content wow fadeInRight delay-0-2s">
            <span className="sub-title">{category}</span>
            <h2>
              <Link href={`/projectDetails/${_id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <Link href={`/projectDetails/${_id}`} className="details-btn">
              <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
