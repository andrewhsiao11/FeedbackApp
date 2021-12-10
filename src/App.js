// import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
// import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  // npm i uuid (unique ID generator package)
  // setting feedback to new array of all the old items plus new feedback item
  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   // newFeedback.id = +newFeedback.id;
  //   // console.log(typeof(newFeedback.id));
  //   setFeedback([newFeedback, ...feedback]);
  // };

  // needed to bring delete from fbItem to dbList to here so can access with setFeedback
  // id is being accessed in fbItem and need it here
  // PropDrilling: passing in handleDelete, catching it in fbList, then passing it in handleDelete1, then catching it in fbItem, and then having event fire
  // filtering feedback array to elements where their id is not equal to the one we are passing in (one we want to delete)
  // const deleteFeedback = (id) => {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
