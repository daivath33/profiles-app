import PropTypes from "prop-types";
import "./Projects.scss";

const ProjectCard = ({ imageUrl, title, className }) => {
  return (
    <div className={className}>
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <p className="title">{title}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProjectCard;
