import { PageLayout, ServicesView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Services: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  return (
    <PageLayout assets={assets}>
      <ServicesView setAssets={setAssets} />
    </PageLayout>
  );
};
export default Services;
