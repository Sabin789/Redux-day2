import { GET_JOBS,GET_JOBS_LOADING,BOOKS_ERROR } from "../actions"

const initialState = {

      queryList: [],
     isLoading:true,
     isError:false
  }


  const SearchReducer = (state = initialState, action) => {
    switch (action.type) {

      case GET_JOBS:
        return{
         ...state,
         queryList:action.payload
        }
        case GET_JOBS_LOADING:
          return{
           ...state,
           isLoading:action.payload
          }
        case BOOKS_ERROR:
          return{
            ...state,
            isError:action.payload
          }

         default:return state
    }

}

 
export default SearchReducer;