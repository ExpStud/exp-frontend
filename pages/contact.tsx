import { PageLayout, ContactView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Contact: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout footer={false} assets={assets}>
      <ContactView setAssets={setAssets} />
    </PageLayout>
  );
};
export default Contact;
