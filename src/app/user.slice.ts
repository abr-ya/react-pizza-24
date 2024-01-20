import { createSlice } from "@reduxjs/toolkit";

import { IProfile } from "../interfaces/user.interface";

export interface IUserState {
  jwt: string | null;
  loginErrorMessage?: string;
  registerErrorMessage?: string;
  profile?: IProfile;
}

const initialState: IUserState = {
  jwt: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearLoginError: (state) => {
      state.loginErrorMessage = undefined;
    },
    clearRegisterError: (state) => {
      state.registerErrorMessage = undefined;
    },
    userLogout: (state) => {
      state.jwt = null;
    },
  },
});

export const { clearLoginError, clearRegisterError, userLogout } = userSlice.actions;
export default userSlice.reducer;
