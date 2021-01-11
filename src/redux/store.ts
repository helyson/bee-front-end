import { configureStore } from "@reduxjs/toolkit";
import { RequestApi } from "src/models/api";
import { UserState } from "src/models/user";
import { RequestReducer, UserReducer } from "./reducers";

const reducer = {
  userReducer: UserReducer,
  requestReducer: RequestReducer,
};

const store = configureStore({
  reducer,
});

export { store };

type RootState = ReturnType<typeof store.getState>;

export const UserSelector = (state: RootState): UserState =>
  state.userReducer;
export const RequestSelector = (state: RootState): RequestApi =>
  state.requestReducer;