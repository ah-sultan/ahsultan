"use client";
import Link from "next/link";

const SectionHeader = ({ sectionTitle, path = "/admin" }) => {
  return (
    <>
      <div className="section-header">
        <h3 className="section-title">{sectionTitle}</h3>
        <div className="button-wrapper">
          <Link className="btn btn-primary" href={path}>Add New</Link>
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
