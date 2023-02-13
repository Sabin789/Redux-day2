import { configureStore,combineReducers } from '@reduxjs/toolkit'
import FavouriteReducer from '../reducers/FavouriteReducer'
import SearchReducer from '../reducers/SearchReducer'
import UserReducer from '../reducers/UserReducer'
const store = configureStore({
  reducer: combineReducers({
    favourite: FavouriteReducer,
    allJobs:SearchReducer,
    user:UserReducer
  })
})

export default store
