const ProjectItem = ({imgUrl, projectTitle, projectDescription, projectTags }) => {
  return (
    <a href="https://jiingler.github.io/hipster_korea/" target="_blank">
      <figure className="project effect px-0">
        <img src={imgUrl} alt="project" className="project-img"/>
        <figcaption className="project-info">
          <h5 className="project-title fw-bolder">{projectTitle}</h5>
          <p className="project-description">{projectDescription}</p>
          <p className="project-tags">{projectTags}</p>
        </figcaption>
      </figure>
    </a>
  );
}

export default ProjectItem;