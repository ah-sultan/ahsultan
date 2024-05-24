import { Spinner } from "react-bootstrap";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <>
      <div className="w-100 h-100 d-flex align-items-center justify-content-center">
        <Spinner/>
      </div>
    </>
  );
}
