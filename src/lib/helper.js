export const replaceString = (getStr) => {
  const str = getStr;
  const replacedStr = str.replace(/\s/g, "_");
  return replaceString;
};

export const handleRemoveSelectedImg = () => {
  const btn = document.getElementById("allUploadImagesRemoveBtn");

  if (btn) {
    btn.click();
  }
};

