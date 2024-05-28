"use client";
import { useEffect } from "react";
const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <>
      <div
        className="w-100 d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <h5 className="text-center mt-4 pt-4">
          Something went wrong <br />
          <br />
          <button type="button" className="theme-btn" onClick={() => reset()}>
            Try Again
          </button>
        </h5>
      </div>
    </>
  );
};

export default Error
