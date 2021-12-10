import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
  return (
    <button type1={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

// Can change the button version (CSS style: primary or secondary) but default to primary
Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
