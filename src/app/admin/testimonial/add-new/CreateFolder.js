import React from "react";

const CreateFolder = () => {
  const handleCreate = async () => {
    try {
      const res = await fetch("/api/create", {
        method : "POST"
      });
      console.log(await res.json());
    } catch (error) {
      console.log(error);
    }
  };
  return (<>
  <button onClick={handleCreate}>Create Folder</button>
  </>)
};

export default CreateFolder;
