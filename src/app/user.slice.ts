import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IProfile } from "../interfaces/user.interface";
import { loadState } from "./storage";
import { ILoginParams, ILoginResponse, IRegisterParams } from "../interfaces/auth.interface";
import axios, { AxiosError } from "axios";
import { API_URL } from "../constants";
import { RootState } from "./store";

export const JWT_PERSISTENT_STATE = "userData";
export interface IUserState {
  jwt: string | null;
  loginErrorMessage?: string;
  registerErrorMessage?: string;
  profile: IProfile;
}

const initialUser = {
  id: 0,
  email: "",
  name: "",
};

const initialState: IUserState = {
  jwt: loadState(JWT_PERSISTENT_STATE)?.jwt ?? null,
  profile: initialUser,
};

export const login = createAsyncThunk("user/login", async (params: ILoginParams) => {
  try {
    const { data } = await axios.post<ILoginResponse>(`${API_URL}/auth/login`, params);
    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message);
    }
  }
});

export const registerUser = createAsyncThunk("user/register", async (params: IRegisterParams) => {
  try {
    const { data } = await axios.post<ILoginResponse>(`${API_URL}/auth/register`, params);
    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message);
    }
  }
});

/* типизация:
- что возвращает,
- параметры,
- стейт */
export const getProfile = createAsyncThunk<IProfile, void, { state: RootState }>(
  "user/getProfile",
  async (_, thunkApi) => {
    const jwt = thunkApi.getState().user.jwt;
    const { data } = await axios.get<IProfile>(`${API_URL}/user/profile`, {
      headers: { Authorization: `Bearer ${jwt}` }, // todo: ==> interceptor?
    });
    return data;
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state) => {
      state.jwt = null;
      state.profile = initialUser;
    },
  },
  extraReducers: (builder) => {
    builder
      // catch "порождает" возможный undefined?
      .addCase(login.fulfilled, (state, action: PayloadAction<ILoginResponse | undefined>) => {
        if (!action.payload) return;
        state.jwt = action.payload.access_token;
        delete state.loginErrorMessage;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginErrorMessage = action.error.message;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.jwt = action.payload.access_token;
        delete state.registerErrorMessage;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerErrorMessage = action.error.message;
      });
  },
});

export const { userLogout } = userSlice.actions;
export default userSlice.reducer;
