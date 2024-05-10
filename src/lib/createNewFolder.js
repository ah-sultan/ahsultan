import fs from "node:fs";

export const  createFolder = (path, callback) => {
  const folderName = path;

  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
      callback(true, `Folder Created Successfully Path: ${folderName}`);
    } else {
      callback(false, "Folder Exist");
    }
  } catch (err) {
    callback(false, err);
  }
};
