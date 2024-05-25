import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
// import SideNavData from "/data/SideNavData";
import SideNavData from "@/components/Admin/data/SideNavData";
import Link from "next/link";

const page = () => {
  return (
    <>
      <DashboardBreadcrumb currentPage="HOME" />
      <ContentWrapper noItems={false}>
        <div className="row">
          {Array.isArray(SideNavData) &&
            SideNavData.map((data, index) => {
              return (
                <div key={index} className="col-lg-4 col-xl-3">
                  <div className="p-4 border mb-4 rounded-2">
                    <h5 style={{ marginBottom: 60 }}>{data?.title}</h5>
                    <Link href={data?.path}>View All 🡵</Link>
                  </div>
                </div>
              );
            })}
        </div>
      </ContentWrapper>
    </>
  );
};

export default page;
