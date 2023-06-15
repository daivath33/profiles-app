import { useNavigate, generatePath } from "react-router-dom";
import PropTypes from "prop-types";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import Button from "./../../components/Button/Button";
import { deleteProject } from "../../api/projects";
import { PROJECTS_ROUTE, EDIT_PROJECT_ROUTE } from "../../routes/const";
import "./Project.scss";

const ProjectActions = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteProject(id)
      .then(() => {
        navigate(PROJECTS_ROUTE);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = () => {
    const path = generatePath(EDIT_PROJECT_ROUTE, { id });
    navigate(path);
  };

  return (
    <div className="project-actions">
      <Button className="outlined" onClick={handleEdit}>
        Koreguoti Projektą <AiFillEdit />
      </Button>
      <Button className="error" onClick={handleDelete}>
        Naikinti Projektą <BsFillTrash3Fill />
      </Button>
    </div>
  );
};

ProjectActions.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ProjectActions;
