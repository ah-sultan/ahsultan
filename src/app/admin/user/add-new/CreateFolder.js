import React from "react";

const CreateFolder = () => {
  const handleCreate = async () => {
    try {
      const res = await fetch("/api/create", {
        method : "POST"
      });
    } catch (error) {
    }
  };
  return (<>
  <button onClick={handleCreate}>Create Folder</button>
  </>)
};

export default CreateFolder;
