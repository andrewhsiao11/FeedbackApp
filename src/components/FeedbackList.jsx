import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
// import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  // with animation from framer motion package
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item1={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // // version without animation from framer motion(npm i framer-motion@4.1.17)
  // return (
  //   <div className="feedback-list">
  //     {feedback1.map((item) => (
  //       <FeedbackItem
  //         key={item.id}
  //         item1={item}
  //         handleDelete1={handleDelete}
  //       />
  //     ))}
  //   </div>
  // );
}

// FeedbackList.propTypes = {
//   // can use arrayOf and shape() to set what we want the item in the array to look like
//   feedback1: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackList;
