import ItemTitle from "./common/ItemTitle";
import ProjectImg1 from "../assets/images/fufutang.png";

import ProjectItem from "./ProjectItem";

import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="projects" className="projects section">
      <div className="container">
        <ItemTitle titleName="Projects" description="this is Projects" />
        <div className="row">
          <div className=" col-lg-6 col-12 mb-3 p-md-5 p-0">
            <ProjectItem
              imgUrl={ProjectImg1}
              projectTitle={t("project.0.title")}
              projectDescription={t("project.0.description")}
              projectTags={t("project.0.tags")}
              projectLink={t("project.0.link")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
