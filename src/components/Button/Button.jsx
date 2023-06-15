import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ className, children, variant, ...props }) => {
  return (
    <button className={`styled-button ${variant} ${className}`} {...props}>
      <div className="btn-text">{children}</div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["contained", "outlined"]),
};

Button.defaultProps = {
  className: "",
  variant: "contained",
};

export default Button;
