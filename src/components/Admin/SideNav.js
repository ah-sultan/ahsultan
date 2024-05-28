import Link from "next/link";
import Logo from "../Shared/Logo";
import SideNavData from "./data/SideNavData";
import SignOutBtn from "../Auth/SignOutBtn";

const SideNav = () => {
  return (
    <>
      <aside className="dashboard-sidenav">
        <div className="header d-flex align-items-center justify-content-between">
          <Logo type={"dark"} />{" "}
          <SignOutBtn className="text-white cursor-pointer" />
        </div>
        <ul className="sidenav-nav-list">
          {Array.isArray(SideNavData) &&
            SideNavData.map((data, index) => {
              return (
                <li key={index}>
                  <Link href={data.path}>{data.title}</Link>
                </li>
              );
            })}
        </ul>
      </aside>
    </>
  );
};

export default SideNav;
