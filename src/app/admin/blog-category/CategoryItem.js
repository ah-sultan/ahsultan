"use client";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CategoryItem = ({ title }) => {
  const [value, setValue] = useState("");
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
        <Button size="sm" variant="primary">
          Edit
        </Button>
        <Button size="sm" variant="success">
          Update
        </Button>
        <Button size="sm" variant="danger">
          Delete
        </Button>
      </div>
    </>
  );
};

export default CategoryItem;
