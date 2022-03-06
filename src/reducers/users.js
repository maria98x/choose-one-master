import {LOAD_USERS,ADD_QUESTION_TO_USER,ADD_NEW_ANSWER_TO_USER} from "../actions/types";

export default function (state=[], action) {

  if (action.type == LOAD_USERS) { 
    return {...state,...action.users};
    
  }else if (action.type == ADD_QUESTION_TO_USER){
    return {...state,
    [action.authedUser]: {
     ...state[action.authedUser],
     questions: state[action.authedUser].questions.concat([
       action.questionID,
     ]),
   }
   }}else if (action.type == ADD_NEW_ANSWER_TO_USER) { 
    return {
      ...state,
      [action.authUser]: {
        ...state[action.authUser],
        answers: {
          ...state[action.authUser].answers,
          [action.questionId]: action.answer,
        },
      },
    }
    }
  else {
    return state;
  }
}