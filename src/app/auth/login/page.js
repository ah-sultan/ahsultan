import "@/app/styles/auth.css";
import { auth } from "@/auth";
import LoginForm from "@/components/Auth/LoginForm";
import SignOutBtn from "@/components/Auth/SignOutBtn";
import SocialMediaAuth from "@/components/Auth/SocialMediaAuth";
import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";

const page = async ({}) => {
  const session = await auth();

  return (
    <>
      <main className="login-page">
        <PageBanner pageName={"Dashboard Login"} />
        <section className="login-wrapper">
          <div className="container">
            <div className="col-6 mx-auto">
              {false ? (
                <div className="d-flex justify-content-center">
                  <div>
                    <h3>Logout now</h3> <br />
                    <Button
                      size="lg"
                      variant="danger"
                      className="position-relative mx-auto d-inline-block"
                    >
                      <SignOutBtn />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="login-form-body">
                  <h3>Login</h3>
                  <p>
                    Dose not have and account yet?{" "}
                    <Link href="/auth/register" className="text-primary">
                      Sign In
                    </Link>
                  </p>
                  <hr />
                  <br />
                  <LoginForm session={session} />
                  <br />
                  <SocialMediaAuth />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
