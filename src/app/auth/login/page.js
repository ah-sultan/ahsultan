import "@/app/styles/auth.css";
import LoginForm from "@/components/Auth/LoginForm";
import PageBanner from "@/components/PageBanner";
import Image from "next/image";

const page = () => {
  return (
    <>
      <main className="login-page">
        <PageBanner pageName={"Dashboard Login"} />
        <section className="login-wrapper">
          <div className="container">
            <div className="col-6 mx-auto">
              <LoginForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
