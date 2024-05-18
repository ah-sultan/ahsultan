"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const DescriptionEditor = ({ setValue = () => {}, value = "" }) => {
  return (
    <>
      <div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          placeholder="The Content Start here ......"
        />
      </div>
    </>
  );
};

export default DescriptionEditor;
