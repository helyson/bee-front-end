import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, User } from "src/models/user";

export const defaultState: UserState = {
  users: [],
};

const { reducer: UserReducer, actions } = createSlice({
  name: "users",
  initialState: defaultState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
    },
  },
});

export { UserReducer };

export const { addUser, setUsers } = actions;
