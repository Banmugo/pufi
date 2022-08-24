import { POST_FORM } from './actions';

const initialState = {
    registredUsers: []    
  };

  export default function rootReducer(state = initialState, action) {
    switch (action.type) {     
      case POST_FORM:
        return {
          ...state,
        };            
    //   case GET_USER_REGISTRED:
    //     return {
    //       ...state,
    //       registredUsers: action.payload
    //     };
      default:
        return state;
    }
  };