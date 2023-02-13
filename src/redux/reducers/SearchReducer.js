import { GET_JOBS } from "../actions"

const initialState = {

      queryList: [],

  }


  const SearchReducer = (state = initialState, action) => {
    switch (action.type) {

      case GET_JOBS:
        return{
         ...state,
         queryList:action.payload
        }

         default:return state
    }

}

 
export default SearchReducer;