import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IProfile } from "../interfaces/user.interface";
import { loadState } from "./storage";
import { ILoginResponse } from "../interfaces/auth.interface";
import axios, { AxiosError } from "axios";
import { API_URL } from "../constants";

export const JWT_PERSISTENT_STATE = "userData";
export interface IUserState {
  jwt: string | null;
  loginErrorMessage?: string;
  registerErrorMessage?: string;
  profile?: IProfile;
}

const initialState: IUserState = {
  jwt: loadState(JWT_PERSISTENT_STATE)?.jwt ?? null,
};

export const login = createAsyncThunk("user/login", async (payload: { email: string; password: string }) => {
  try {
    const { data } = await axios.post<ILoginResponse>(`${API_URL}/auth/login`, payload);
    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message);
    }
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state) => {
      state.jwt = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action: PayloadAction<ILoginResponse | undefined>) => {
        if (!action.payload) return;
        state.jwt = action.payload.access_token;
        delete state.loginErrorMessage;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginErrorMessage = action.error.message;
      });
  },
});

export const { userLogout } = userSlice.actions;
export default userSlice.reducer;
