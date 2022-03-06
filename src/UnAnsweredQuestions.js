import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import QuestionCard from './Card';
import Mynav from './Navbar';
import { getAllQuestions } from "./DATA";
import { loadQuestions } from './actions';


export default function UnAnsweredQuestions() {
    const dispatch = useDispatch();
    const questionsList= useSelector((store)=> store.questions)
    const users = useSelector((store)=>store.users )
    const authUser = useSelector((store)=> store.authUser)

    useEffect(() => {
        getAllQuestions().then((res) =>{
            dispatch(loadQuestions(res));
            
            });
    }, [])
    

    const answeredIds = Object.keys(authUser.answers);
    const unanswered = Object.values(questionsList).filter(
      (question) => !answeredIds.includes(question.id)

    );






  return (
    <div>
        <Mynav fullname={authUser.fullname} imgUrl={authUser.imgUrl}/>
{
        unanswered.map((question, index) => {
           
            var user = question.creator;
            var img = users[user].imgUrl;
            var creator = users[user].fullname;
            var firstOption = question.firstOption.string;
            var secondOption = question.secondOption.string;
            var questionId = question.id

         return <QuestionCard key ={index} questionId={questionId} creator={creator} img={img} firstAns={firstOption} secondAns={secondOption}/>




         })
        }
    </div>
  )
}
