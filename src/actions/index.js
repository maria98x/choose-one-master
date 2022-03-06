import { LOAD_USERS , LOAD_QUESTIONS, SET_AUTH_USER ,
  ADD_QUESTION,ADD_QUESTION_TO_USER,ADD_NEW_ANSWER_TO_QUESTION,ADD_NEW_ANSWER_TO_USER,UPDATE_AUTH} from "./types";


export const loadUsers = (users) => {
    return ({
        type:LOAD_USERS,
        users:users
    });

}

export const loadQuestions = (questions) => {
    return ({
        type:LOAD_QUESTIONS,
        questions:questions
    });

}

export const setAuthUser = (user) => {
    return ({
        type:SET_AUTH_USER,
        authUser:user
    });


}

export function addQuestionToStore(question) {
    return {
      type: ADD_QUESTION,
      question
    };
  }


  export function addQuestionToUser( authedUser, questionID ) {
    return {
      type: ADD_QUESTION_TO_USER,
      questionID,
      authedUser
    };
  }
  export function addNewAnswerToQuestion(answer,authUser, questionId) {
    return {
      type: ADD_NEW_ANSWER_TO_QUESTION,
      authUser,
      questionId,
      answer
    };
  }

  export function addNewAnswerToUser(answer,authUser, questionId ) {
    return {
      type: ADD_NEW_ANSWER_TO_USER,
      authUser,
      questionId,
      answer
    };
  }
  export function updateAuth(answer,questionId){
    return{
      type:UPDATE_AUTH,
      answer,
      questionId
    }

  }


  export const addAnswerToAll=(e,props,creator)=>{
  
    return function(dispatch){

      dispatch(addNewAnswerToUser(e.target.value, creator, props.questionId));
      dispatch(addNewAnswerToQuestion(e.target.value, creator, props.questionId));
      dispatch(updateAuth(e.target.value, props.questionId));
    }

  }

  export const addQuestionToAll=(Newquestion,creator,id)=>{
    return function(dispatch){
      
      dispatch(addQuestionToStore(Newquestion));
      dispatch(addQuestionToUser(creator,id));

    }
  }

  