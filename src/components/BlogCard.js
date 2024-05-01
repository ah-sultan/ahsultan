import Image from "next/image";
import Link from "next/link";

const BlogCard = (props) => {
  return (
    <div className="blog-card">
      <div className="card-img">
        <Image
          src={props.thumbnail}
          alt={props.title}
          width={400}
          height={250}
        />
      </div>
      <div className="card-items">
        <span>{props.publishDate}</span>
        <span>•</span>
        <span>{props.category}</span>
      </div>

      <h6 className="card-title">
        <Link href={'/'}>
        {props.title}
        </Link>
      </h6>
    </div>
  );
};

export default BlogCard;
