import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import style from "./ImgCloud.module.css";
import {
  ModalBody,
  Modal,
  ModalHeader,
  ModalTitle,
  ToastContainer,
} from "react-bootstrap";



const ViewCloudImg = async () => {
  const [imgPath, setImgPath] = useState(
    "/images/blog/blog_01/blog_card_thumbnail.jpg"
  );
  const [modalShow, setModalShow] = useState(false);
  const cloudImgRef = useRef();


  useEffect(() => {
    // IMG CSS ----
    cloudImgRef.current.style.height = `${cloudImgRef.current.clientWidth}px`;
  }, [cloudImgRef]);

  

  return (
    <>
      <div
        className={style.cloudImgBlock + "" + " cloudImgBlockID"}
        ref={cloudImgRef}
      >
        <input type="checkbox" />
        <Image
          src={imgPath}
          alt="Folder"
          width={400}
          height={400}
          onClick={() => setModalShow(true)}
        />
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <ModalHeader closeButton>
            <ModalTitle as={"h6"}>{imgPath}</ModalTitle>
          </ModalHeader>
          <ModalBody
            style={{
              background: "transparent",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image src={imgPath} alt="Folder" width={400} height={400} />
          </ModalBody>
          <ToastContainer position="top-right" theme="dark" />
        </Modal>
      </div>
    </>
  );
};

export default ViewCloudImg;
