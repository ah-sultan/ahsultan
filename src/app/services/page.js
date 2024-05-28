import PageBanner from "@/components/PageBanner";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Link from "next/link";


import Image from "next/image";
import { getServices } from "@/lib/getData";
import About from "@/components/About";
import WhatIdo from "@/components/WhatIdo";

export const metadata = {
  title: "Services - Sultan Ahmed Portfolio Website",
};

const ServicePage = async () => {
  const getData = await getServices()
  return (
    <main>
      <PageBanner pageName={"Popular Service"} />

      <WhatIdo/>
      {/* What I Do Area end */}
      <Services extraClass={"bgc-black "} />
      {/* Pricing Area start */}
      {/* <Pricing extraClass={"pb-100 mt-0 pt-0"} /> */}
    </main>
  );
};
export default ServicePage;
