import { PageLayout, ProjectsView } from "@components";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const ProjectPage: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);
  const router = useRouter();
  const { id } = router.query;

  return (
    <PageLayout assets={assets}>
      <div className="col-centered h-screen"> Project : {id}</div>
    </PageLayout>
  );
};
export default ProjectPage;
