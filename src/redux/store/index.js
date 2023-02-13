import { configureStore,combineReducers } from '@reduxjs/toolkit'
import FavouriteReducer from '../reducers/FavouriteReducer'
import SearchReducer from '../reducers/SearchReducer'

const store = configureStore({
  reducer: combineReducers({
    favourite: FavouriteReducer,
    queryList:SearchReducer
  })
})

export default store
