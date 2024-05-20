import "@/app/styles/auth.css";
import LoginForm from "@/components/Auth/LoginForm";
import PageBanner from "@/components/PageBanner";
import Image from "next/image";

const page = () => {
  return (
    <>
      <main className="login">
        <PageBanner pageName={"Dashboard Login"} />
        <section className="login-wrapper">
          <div className="container">
            <div className="col-8 mx-auto">
              <div className="row">
                <div className="col-6">
                  <Image
                    src="/images/auth/login-image.jpg"
                    width={400}
                    height={800}
                    alt="Login Img"
                    className="img-fluid"
                  />
                </div>
                <div className="col-6">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
