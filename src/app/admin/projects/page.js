import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import ItemsButtonWrapper from "@/components/Admin/ItemsButtonWrapper";
import SectionHeader from "@/components/Admin/SectionHeader";
import ProjectsData from "@/Data/ProjectsData";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="dash-projects">
        <DashboardBreadcrumb currentPage="All Projects" />
        <SectionHeader sectionTitle="All Projects" path="/admin/projects/add-project" />
        <ContentWrapper noItems={false}>
          <ul>
            {Array.isArray(ProjectsData) &&
              ProjectsData.map((data, index) => {
                return (
                  <li className="dash-projects-item" key={index}>
                    <div className="card-content">
                      <h6>{data.title}..</h6>
                      <p>
                        <span>Category: {data.category}</span>
                        <span style={{ color: "#000", opacity: 0.6 }}>|</span>
                        <span>Clients: {data.clients}</span>
                      </p>
                    </div>
                    <div className="button-area">
                      <ItemsButtonWrapper />
                    </div>
                  </li>
                );
              })}
          </ul>
        </ContentWrapper>
      </section>
    </>
  );
};

export default page;
