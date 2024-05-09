"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./ImgCloud.module.css";
import {
  Button,
  Figure,
  FigureCaption,
  Modal,
  ModalBody,
} from "react-bootstrap";
import Image from "next/image";
import CreateNewFolder from "./CreateNewFolder";
import UploadNewImage from "./UploadNewImage";
import CloudImg from "./CloudImg";

const ImgCloud = ({ imgCaption = "Upload Image" }) => {
  const [fileList, setFileList] = useState(["", ""]);
  const [selectedImg, setSelectedImg] = useState(
    "/images/dashboard/upload-img-btn.png"
  );
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // IMG CSS ----
    const cloudImgRef = document.querySelectorAll(".cloudImgBlockID");
    cloudImgRef.forEach((img) => {
      img.style.height = img.clientWidth + "px";
    });
    // IMG CSS END
  }, [showModal]);

  return (
    <>
      <section className={style.imgCloud}>
        <div className={style.uploadImgBtn} onClick={() => setShowModal(true)}>
          <Image
            src={selectedImg}
            width={300}
            height={300}
            alt="Selected Img"
          />
        </div>
        <Modal show={showModal} fullscreen={true} className="p-5">
          <ModalBody>
            <div>
              <div className={style.cloudWrapper}>
                <div className={style.cloudHeader}>
                  <ul>
                    {["Uploads", "Testimonial", "Testimonial Title"].map(
                      (item) => (
                        <li key={item}>{item}</li>
                      )
                    )}
                  </ul>
                  <div>
                    <Button type="button" variant="primary">
                      Select Image
                    </Button>
                    <Button type="button" variant="danger" className="ms-4" onClick={() => setShowModal(false)}>
                      Close
                    </Button>
                  </div>
                </div>
                <div className={style.cloudContent}>
                  <ul>
                    {Array.isArray(fileList) &&
                      fileList.map((data, index) => {
                        return (
                          <li key={index}>
                            {true ? (
                              <CloudImg />
                            ) : (
                              <Image
                                src="/images/dashboard/folder-icon.svg"
                                alt="Folder"
                                width={400}
                                height={400}
                                
                              />
                            )}
                            <h6>Folder Name</h6>
                          </li>
                        );
                      })}
                    {/* CREATE NEW FOLDER */}
                    <li>
                      <CreateNewFolder />
                    </li>
                    <li>
                      <UploadNewImage />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </section>
    </>
  );
};

export default ImgCloud;
