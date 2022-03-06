import React from "react";
import { Routes, Route } from "react-router-dom";
import AddQuestion from "./AddQuestion";
import LoginPage from "./LoginPage";
import Logout from "./Logout";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";
import LeaderBoard from "./LeaderBoard";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/UnAnsweredQuestions" element={<UnAnsweredQuestions />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/AddQuestion" element={<AddQuestion />} />
        <Route path="/AnsweredQuestions" element={<AnsweredQuestions />} />
        <Route path="/LeaderBoard" element={<LeaderBoard />} />
      </Routes>
    </div>
  );
}

export default App;
