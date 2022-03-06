import React from "react";
import {  useSelector } from "react-redux";
import AnsweredCard from "./AnsweredCard";
import Mynav from "./Navbar";

export default function AnsweredQuestions() {
  const questionsList = useSelector((store) => store.questions);
  const users = useSelector((store) => store.users);
  const authUser = useSelector((store) => store.authUser);

  const answeredIds = Object.keys(authUser.answers);

  const answered = Object.values(questionsList).filter((question) =>
    answeredIds.includes(question.id)
  );


  return (
    <div>
      <Mynav fullname={authUser.fullname} imgUrl={authUser.imgUrl} />
      {answered.map((question, index) => {
        var user = question.creator;
        var img = users[user].imgUrl;
        var creator = users[user].fullname;
        var firstOption = question.firstOption.string;
        var secondOption = question.secondOption.string;

        var selectedOpts = authUser.answers[question.id];

        if (selectedOpts === "firstOption") {
          return (
            <AnsweredCard
              img={img}
              checkValue1={true}
              checkValue2={false}
              creator={creator}
              firstOption={firstOption}
              secondOption={secondOption}
              key={index}
            />
          );
        } else {
          return (
            <AnsweredCard
              img={img}
              checkValue1={false}
              checkValue2={true}
              creator={user}
              firstOption={firstOption}
              secondOption={secondOption}
              key={index}
            />
          );
        }

        //   Object.values(selectedOpts).map((option,indx) =>{
        //   var selectedAns = question[option].string;

        //   console.log("selectedAns",selectedAns);

        //   return <AnsweredCard key ={indx} selectedOpt ={selectedAns} userName={userName} img={img} firstAns={firstOption} secondAns={secondOption}/>
        //  })
      })}
    </div>
  );
}
