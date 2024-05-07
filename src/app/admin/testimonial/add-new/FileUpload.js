"use client";

import React from "react";

const FileUpload = () => {
  const handleUpload = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
      });

      console.log(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleUpload}>
        <input type="file" name="avatar" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FileUpload;
