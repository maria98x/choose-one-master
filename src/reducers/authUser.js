import { SET_AUTH_USER, UPDATE_AUTH} from "../actions/types";

export default function (state=[], action){
if (action.type== SET_AUTH_USER){
    return {...action.authUser}
}else if(action.type == UPDATE_AUTH){
    return {...state,answers:{...state.answers,[action.questionId]: action.answer}}
}
else{
    return state;
}
}