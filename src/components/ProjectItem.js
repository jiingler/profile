import goImg from '../assets/images/go.svg';

const ProjectItem = ({imgUrl, projectTitle, projectDescription, projectTags }) => {
  return (
    <a href="https://jiingler.github.io/hipster_korea/" target="_blank">
      <figure className="project px-0">
        <img src={imgUrl} alt="project" className="project-img"/>
        <figcaption className="project-info">
          <h5 className="project-title fw-bolder">{projectTitle}</h5>
          <p className="project-description">{projectDescription}</p>
          <p className="project-tags">{projectTags}</p>
        </figcaption>
        <img className="go-img" src={goImg} alt="go icon"/>
      </figure>
    </a>
  );
}

export default ProjectItem;