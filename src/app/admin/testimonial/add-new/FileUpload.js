"use client";
import React, { useState } from "react";
import CreateFolder from "./CreateFolder";

const FileUpload = () => {
  const [img, setImg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("file", img);


    try {
      const res = await fetch("/api/upload/", {
        method: "POST",
        body:formData,
        formData,
      });

    } catch (error) {
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setImg(e.target.files[0])} name="file" />
        <br/>
        <button type="submit">SUBMIT</button>
      </form>
      <CreateFolder/>
    </>
  );
};

export default FileUpload;
