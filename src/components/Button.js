import PropTypes from "prop-types";

const Button = ({ title, color, onClick }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }} onClick={onClick}>
      {title}
    </button>
  );
};

Button.defaultProps = {
  title: "Add",
  backgroundColor: "black",
};

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};

export default Button;