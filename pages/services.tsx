import { PageLayout, ServicesView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Services: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout footer={true} assets={assets}>
      <ServicesView setAssets={setAssets} />
    </PageLayout>
  );
};
export default Services;
