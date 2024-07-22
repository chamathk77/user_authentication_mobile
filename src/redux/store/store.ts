import { configureStore } from '@reduxjs/toolkit';

import LoginReducer from '../reducers/LoginReducer';


export const store = configureStore({
  reducer: {
    
    Login_and_Signup: LoginReducer,

  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
