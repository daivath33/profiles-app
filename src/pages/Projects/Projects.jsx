import { useEffect, useState } from "react";
import { Link, generatePath, useNavigate } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import { getProjects } from "../../api/projects";
import ProjectCard from "./ProjectCard";
import { PROJECT_ROUTE, NEW_PROJECT_ROUTE } from "../../routes/const";
import "./Projects.scss";
import Button from "../../components/Button/Button";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getProjects()
      .then((response) => {
        setProjects(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleCreateNewProject = () => {
    navigate(NEW_PROJECT_ROUTE);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (projects.length === 0) {
    return <div>There are no projects yet.</div>;
  }

  return (
    <>
      <div className="new-project">
        <Button onClick={handleCreateNewProject}>
          <div className="text">
            <p>Prideti nauja projekta</p>{" "}
            <MdAddCircleOutline className="btn-icon" />
          </div>
        </Button>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={generatePath(PROJECT_ROUTE, { id: project.id })}
            className="single=project"
          >
            <ProjectCard
              className="project-card"
              title={project.title}
              imageUrl={project.imageUrl}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Projects;
