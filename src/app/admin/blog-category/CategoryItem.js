"use client";
import AdminModal from "@/components/Admin/AdminModal";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const CategoryItem = ({ title, _id }) => {
  const [value, setValue] = useState(title);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();


  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/blog-category?id=${_id}`, {
        method: "DELETE",
      });

      if (res.ok || res.statusText === "OK") {
        router.refresh();
        setShowModal(false);
        toast.success("Category deleted successfully");
      }
    } catch (error) {
      toast.success("failed to delete category");
    }
  };
  return (
    <>
      <div className="dash-cat-title">
        {
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={title}
            className="dash-input-form"
            disabled
          />
        }
      </div>
      <div className="button-wrapper">
        <Button size="sm" variant="danger" onClick={() => setShowModal(true)}>
          Delete
        </Button>
      </div>
      <AdminModal
        handleDelete={handleDelete}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default CategoryItem;
