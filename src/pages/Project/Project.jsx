import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getProject } from "../../api/projects";
import ProjectCard from "../../pages/Projects/ProjectCard";
import "./Project.scss";

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
    return <div>Project not found!</div>;
  }

  return (
    <div className="project-details">
      <div className="left">
        <img src={project.imageUrl} alt="project-image" />
        <p className="title">{project.title}</p>
        <p className="description">{project.description}</p>
      </div>
      <div className="right">
        <div>
          <h3>Uzsakovas:</h3>
          <p>{project.client}</p>
        </div>
        <div>
          <h3>Projekto vykdytojai:</h3>
          <p>
            {project.people[0].name} {project.people[0].surname}, position:{" "}
            {project.people[0].position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
