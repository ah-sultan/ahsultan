import Image from "next/image";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <>
      <div className="w-100 d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
        {/* <Image width={100} height={100} alt="Loading..." src="/images/preloader.gif"/> */}
        <Spinner/>
      </div>
    </>
  );
}
