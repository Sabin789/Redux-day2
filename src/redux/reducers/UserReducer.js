import { LOG_OUT, SET_USERNAME } from "../actions";


const initialState = {
    name: "",
    isLoading:false
  }

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return {
              ...state,
              name:action.payload,
    
            }
      case LOG_OUT:{
       return {
        ...state,
        name:action.payload
       }
      }
          default:
            return state
    }
}
 
export default UserReducer;