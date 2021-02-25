import ItemTitle from './common/ItemTitle';
import ProjectImg1 from '../assets/images/project1.png';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="projects section">
      <div className="container">
        <ItemTitle titleName="Projects" description="this is Projects"/>
        <div className="row">
          <div className=" col-lg-6 col-12 mb-3 p-md-5 p-0">
            <ProjectItem 
              imgUrl={ProjectImg1}
              projectTitle={'hipster.korea'}
              projectDescription={'A website lists korean shopping websites that categoried by what they sell.'}
              projectTags={'Bootstrap, React Hooks, Data Binding'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;