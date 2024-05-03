import "@/app/styles/admin.css";
import AdminModal from "@/components/Admin/AdminModal";
import SideNav from "@/components/Admin/SideNav";
const layout = ({ children }) => {
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
};

export default layout;
