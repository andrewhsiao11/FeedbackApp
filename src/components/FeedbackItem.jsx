// importing Font Awesome library to use icons ("X" icon here) and fonts. ran npm i react-icons
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item1 }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item1.rating}</div>
      <button onClick={() => deleteFeedback(item1.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item1)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item1.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  // item1 is an object from mapping through feedbackData in feedbackList
  item1: PropTypes.object.isRequired,
};

export default FeedbackItem;
// classes here are from CSS file
