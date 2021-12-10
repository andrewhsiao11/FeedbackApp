import PropTypes from "prop-types";

function Card({ children, reverse }) {
  // Conditional class example (if reverse is true then add reverse class (turns bg dar and text white))
  // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

  // Conditional style example (conditionals set into style)
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
    // children is a type: node
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card;
// whatever is inside card tags will be displayed inside this div that has a CSS card class
// basically acts as a styled component
