import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import ItemsButtonWrapper from "@/components/Admin/ItemsButtonWrapper";
import SectionHeader from "@/components/Admin/SectionHeader";
import { getServices } from "@/lib/getData";
const servicesData = [
  {
    _id: "0",
    servicesNo: "01",
    title: "Web Design And Development",
    description: "Dignissimos ducimus blanditiis praesen",
    body: "",
  },
];

const page = async () => {
  const servicesData = await getServices();
  return (
    <>
      <section className="dash-projects">
        <DashboardBreadcrumb currentPage="All Services" />
        <SectionHeader
          sectionTitle="All Services"
          path="/admin/services/add-new"
        />
        <ContentWrapper noItems={false}>
          {Array.isArray(servicesData) &&
            servicesData.map((data, index) => {
              return (
                <div
                  className="row mb-4"
                  key={index}
                  style={{ borderBottom: "1px solid #f5f5f5" }}
                >
                  <div className="col-8 d-flex align-items-start">
                    <h4>{data.serviceNo}.</h4>
                    <div className="ps-4">
                      <h6>{data.title}</h6>
                      <p>{data.description}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <ItemsButtonWrapper _id={data.id} api="/api/service" modalText="Service" />
                  </div>
                </div>
              );
            })}
        </ContentWrapper>
      </section>
    </>
  );
};

export default page;
