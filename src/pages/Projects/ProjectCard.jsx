import PropTypes from "prop-types";
import "./Projects.scss";

const ProjectCard = ({ imageUrl, title, description, className }) => {
  return (
    <div className={className}>
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProjectCard;
