import Link from "next/link";
import HeaderMenuData from "@/Data/HeaderMenuData";

const HeaderMenu = () => {
  return (
    <ul className="navigation clearfix">
      {Array.isArray(HeaderMenuData) &&
        HeaderMenuData.map((data, index) => {
          return (
            <li key={index}>
              <Link className="fw-400" href={data.path}>{data.title}</Link>
            </li>
          );
        })}
    </ul>
  );
};
export default HeaderMenu;
