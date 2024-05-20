"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const AddNewCategory = () => {
  const [title, setTitle] = useState();

  const router = useRouter();

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
    };

    try {
      const res = await fetch("/api/blog-category", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.ok || res.statusText === "OK") {
        toast.success("Category created successfully");
        router.refresh();
      }
    } catch (error) {
      toast.error("Failed to create category");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-category-block">
        <div>
          <label htmlFor="addCategory">Add New Category</label>
          <input
            type="text"
            placeholder="Add New Category"
            className="dash-input-form"
            name="addCategory"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <Button type="submit" variant="primary">
          Add Now
        </Button>
      </div>
    </form>
  );
};

export default AddNewCategory;
