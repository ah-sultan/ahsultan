"use client";

import { Button } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/navigation";

const UploadByUrl = ({ handleShow}) => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [msg, setMsg] = useState("");


  const router = useRouter()

  // Handle Submit
  const handleSubmit = async (e) => {
    setMsg("");
    if (url?.length > 0) {
      const imgData = {
        url,
        albumName: {
          _id: 0,
          name: "All",
        },
      };

      setLoading(true);
      try {
        const res = await fetch("/api/image-gallery/upload-by-url", {
          method: "POST",
          body: JSON.stringify(imgData),
        });

        const data = await res.json();
        if (res.ok) {
          setLoading(false);
          setMsg("Uploaded Successfully");
          setUrl("")
          handleShow()
        } else {
          setMsg(data.message);
          setLoading(false);
        }

        console.log(res)

      } catch (error) {
        setMsg("Something went wrong");
        setLoading(false);
      }
    }else{
      setMsg("please insert image")
    }
  };
  return (
    <div className="col-4">
      <div >
        <div className="d-flex align-items-center">
          <input
            type="text"
            placeholder="Insert image url"
            required
            className="dash-input-form mb-0 me-2"
            style={{ padding: "8px 10px" }}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button type="button" variant="secondary" size="md" disabled={loading} onClick={handleSubmit}>
            {loading ? "loading" : "Submit"}
          </Button>
        </div>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default UploadByUrl;
