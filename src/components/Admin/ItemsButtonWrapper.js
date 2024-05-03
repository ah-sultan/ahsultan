import Link from "next/link";

const ItemsButtonWrapper = ({}) => {
  return (
    <>
      <div className="item-btn-wrapper">
        <Link className="bg-primary" href={"/"}>View</Link>
        <Link className="bg-success" href={"/"}>Edit</Link>
        <Link className="bg-danger" href={"/"}>Delete</Link>
      </div>
    </>
  );
};

export default ItemsButtonWrapper;
