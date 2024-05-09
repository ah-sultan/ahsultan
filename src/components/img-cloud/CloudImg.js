import Image from "next/image";
import React, { useState } from "react";
import style from "./ImgCloud.module.css";
import { ModalBody, Modal, ModalHeader, ModalTitle } from "react-bootstrap";

const CloudImg = () => {
  const [imgPath, setImgPath] = useState(
    "/images/blog/blog_01/blog_card_thumbnail.jpg"
  );
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={style.cloudImgBlock + "" + " cloudImgBlockID"}>
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
        </Modal>
      </div>
    </>
  );
};

export default CloudImg;
