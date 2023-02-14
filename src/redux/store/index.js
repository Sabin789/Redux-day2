import { configureStore,combineReducers } from '@reduxjs/toolkit'
import FavouriteReducer from '../reducers/FavouriteReducer'
import SearchReducer from '../reducers/SearchReducer'
import UserReducer from '../reducers/UserReducer'
import storage from "redux-persist/lib/storage"
import {
   persistReducer //FLUSH,REHYDRATE,
  // PAUSE,PERSIST, PURGE,REGISTER,
} from 'redux-persist';
 import {encryptTransform} from "redux-persist-transform-encrypt"
 const secretKey=process.env.REACT_APP_ENV_SECRET_KEY

 
const persistConfig ={
  key:"root",

  storage,
  transforms: [
    encryptTransform({
      secretKey: secretKey
    }),
  ],
//NEVER HARDCODE PASSWORDS
}
const reducers= combineReducers({
  favourite: FavouriteReducer,
  allJobs:SearchReducer,
  user:UserReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: false
      }),

})
export default store
