import "@/app/styles/auth.css";
import { auth, signIn } from "@/auth";
import AuthBlock from "@/components/Auth/RegisterBox";
import PageBanner from "@/components/PageBanner";

const page = async () => {
  const session = await auth();
  console.log(session)

  return (
    <main className="login-page">
      <PageBanner pageName={"Dashboard Login"} />
      <section className="login-wrapper">
        <div className="container">
          <div className="col-6 mx-auto">
            <AuthBlock session={session} type={"register"} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
