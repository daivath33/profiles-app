import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getProject } from "../../api/projects";
import "./Project.scss";
import ProjectActions from "./ProjectActions";
import ProjectPeopleInfo from "./ProjectPeopleInfo";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProject(id)
      .then((response) => {
        setProject(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }
  if (!project) {
    return <div>Projektas nerastas!</div>;
  }

  return (
    <>
      <div className="project-container">
        <h2>Projektas "{project.title}"</h2>
        <div className="project-details">
          <div className="left">
            <img src={project.imageUrl} alt="" className="project-img" />
            <p className="descr-title">Apie Projektą:</p>
            <p className="descr">{project.description}</p>
          </div>
          <div className="right">
            <div className="project-info">
              <div>
                <h3>Užsakovas:</h3>
                <p>{project.client}</p>
              </div>
              <ProjectPeopleInfo people={project.people} />
              <div>
                <h3>Projekto pradžia:</h3>
                <p>{project.startingDate}</p>
              </div>
              <div>
                <h3>Projekto pabaiga:</h3>
                <p>{project.endingDate}</p>
              </div>
            </div>
            <div className="actions-box">
              <ProjectActions id={project.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
