import Link from "next/link";
import React from "react";

const AccessDenied = () => {
  return (
    <>
      <div className="container pt-5">
        <br />
        <br />
        <br />
        <div
          style={{
            border: "1px solid #ddd",
            padding: 40,
            borderRadius: 10,
            width: "fit-content",
            margin: "auto",
          }}
        >
          <h5 className="text-center mt-4">
            You need to logging first. <br />
            <br />
            <Link href="/auth/login" className="text-white btn btn-primary">
              Login Now
            </Link>
          </h5>
        </div>
      </div>
    </>
  );
};

export default AccessDenied;
