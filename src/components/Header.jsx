import PropTypes from 'prop-types'


function Header({ text, bgColor, textColor }) {
    // basic inline styling
    const headerStyles = {
      backgroundColor: bgColor,
      color: textColor,
    };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// setting default props if not specified in component tag
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
}
// can define the type of prop you want passed (can add .isRequired to the end also)
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
