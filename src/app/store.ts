import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from "./user.slice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// здесь дока и purple совпадают!)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
