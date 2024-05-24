import "@/app/styles/admin.css";
import { auth } from "@/auth";
import AdminModal from "@/components/Admin/AdminModal";
import SideNav from "@/components/Admin/SideNav";
import AccessDenied from "@/components/Auth/AccessDenied";
import { redirect } from "next/navigation";
const layout = async ({ children }) => {
  const session = await auth();
  console.log(session)
  if (session?.user?.role === "admin") {
    return (
      <>
        <main className="admin-page">
          <div className="admin-page-sidenav">
            <SideNav />
          </div>
          <div className="admin-page-content">{children}</div>
        </main>
      </>
    );
  } else {
    redirect("/auth/login")
  }
};

export default layout;
