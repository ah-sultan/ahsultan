"use client";
const error = ({ error, reset }) => {
  return (
    <>
      <div className="w-100 d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
        <h5 className="text-center mt-4 pt-4">
          Something went wrong <br /><br />
          <button type="button" className="theme-btn" onClick={() => reset()}>
            Try Again
          </button>
        </h5>
      </div>
    </>
  );
};

export default error;
