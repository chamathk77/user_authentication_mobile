const CLASS_NAME = "LoginReducer and signupReducer";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const UserInitialState = {
  email: '',
  token: '',
  isAuthenticated: false,


};



export const LoginSlice = createSlice({
  name: 'Login',
  initialState: {
    LoginUser: UserInitialState,

  },
  reducers: {
    Update_Email: (state, action: PayloadAction<any>) => {
      state.LoginUser.email = action.payload;
      console.log(`${CLASS_NAME} Updating Reducer LoginUser email state :`, action.payload);
    },
    Update_token: (state, action: PayloadAction<any>) => {
      state.LoginUser.token = action.payload;
      console.log(`${CLASS_NAME} Updating Reducer LoginUser token state :`, action.payload);
    },
    Update_isAuthenticated: (state, action: PayloadAction<any>) => {
      state.LoginUser.isAuthenticated = action.payload;
      console.log(`${CLASS_NAME} Updating Reducer LoginUser isAuthenticated state :`, action.payload);
    },
    ResetUserState: (state) => {
      state.LoginUser = UserInitialState;

      console.log(`${CLASS_NAME} Reset Reducer LoginUser state:`, UserInitialState);

    },


  },
});

export const { Update_Email, Update_token, Update_isAuthenticated } = LoginSlice.actions;
export default LoginSlice.reducer;
