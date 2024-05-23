import ContentWrapper from "@/components/Admin/ContentWrapper";
import DashboardBreadcrumb from "@/components/Admin/DashboardBreadcrumb";
import ItemsButtonWrapper from "@/components/Admin/ItemsButtonWrapper";
import SectionHeader from "@/components/Admin/SectionHeader";
import { getUsers } from "@/lib/getData";
import Image from "next/image";

const page = async () => {
  const getData = await getUsers();

  return (
    <>
      <section className="dash-users">
        <DashboardBreadcrumb currentPage="Users" />
        <SectionHeader
          sectionTitle="All User"
          path="/admin/user/add-new"
        />
        <ContentWrapper noItems={false}>
          <ul>
            {Array.isArray(getData) &&
              getData.map((data, index) => {
                return (
                  <li className="row dash-user-list" key={index}>
                    <div className="col-8">
                      <h6>{data.fullName}</h6>
                      <div className="d-flex align-items-center">
                        <span className="user-name">{data.userName}</span>
                        <span className="user-email">{data.email}</span>
                        <span className="user-role">{data.role}</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <ItemsButtonWrapper
                        modalText="User"
                        api="/api/user"
                        _id={data.id}
                        image={data.image}
                      />
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
