import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ _id, thumbnail, publishedDate, category, title }) => {
  return (
    <div className="blog-card">
      <div className="card-img">
        <Image src={thumbnail} alt="data" width={400} height={250} />
      </div>
      <div className="card-items">
        <span>{publishedDate}</span>
        <span>•</span>
        <span>{category?.title}</span>
      </div>

      <h6 className="card-title">
        <Link href={`/blogDetails/${_id}`}>{title}</Link>
      </h6>
    </div>
  );
};

export default BlogCard;
