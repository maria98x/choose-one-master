
import {LOAD_QUESTIONS,ADD_QUESTION,ADD_NEW_ANSWER_TO_QUESTION} from "../actions/types";

export default function (state=[], action) {

  if (action.type == LOAD_QUESTIONS) { 
    return {...state, ...action.questions};
    
  }
  else if (action.type == ADD_QUESTION) { 
    return {...state,[action.question.id]:action.question};
    
  }
  else if (action.type == ADD_NEW_ANSWER_TO_QUESTION) { 
    return { ...state,
      [action.questionId]: {
        ...state[action.questionId],
        [action.answer]: {
          ...state[action.questionId][action.answer],
          votes: state[action.questionId][action.answer].votes.concat([action.authUser]),
        },
      }};
  }
  else {
    return state;
  }
}