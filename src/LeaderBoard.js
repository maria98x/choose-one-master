import React from "react";
import {  useSelector } from "react-redux";
import Mynav from "./Navbar";
import BoardCard from "./BoardCard";



export default function LeaderBoard() {
    const questionsList = useSelector((store) => store.questions);
    const users = useSelector((store) => store.users);
    const authUser = useSelector((store) => store.authUser);

  return (
    <div>
        <Mynav fullname={authUser.fullname} imgUrl={authUser.imgUrl}/>
        {
     Object.keys(users).map((user,index) =>{
        var userName = users[user].fullname
        var img = users[user].imgUrl
        var questionsCreated = users[user].questions.length
        var allAnswers = users[user].answers
        var answers = Object.keys(allAnswers).length
        var total = questionsCreated + answers;

        return <BoardCard key ={index} userName={userName} img={img} answers={answers} questionsCreated={questionsCreated} total={total}/>
        


    })
        }
   





    </div>
  )
}
