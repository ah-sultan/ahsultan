import Link from "next/link";
import Logo from "../Shared/Header/Logo";
import SideNavData from "./data/SideNavData";

const SideNav = () => {
  return (
    <>
      <aside className="dashboard-sidenav">
        <div className="header">
          <Logo type={"dark"} />
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
