import "@/app/styles/admin.css";
import { auth } from "@/auth";
import SideNav from "@/components/Admin/SideNav";

import { redirect } from "next/navigation";
const layout = async ({ children }) => {
  
  const session = await auth();
  // if (session?.user?.role === "admin") {
  if (true) {
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
    redirect("/auth/login");
  }
};

export default layout;
