import { cleanup } from "@testing-library/react";
import { User, UserState } from "src/models/user";
import { addUser, defaultState, setUsers, UserReducer } from "./user-reducer";

describe("User Reducer", () => {
  afterEach(cleanup);
  const users: User[] = [
    {
      id: 1,
      name: "Francisco",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      photo:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?h=350&auto=compress&cs=tinysrgb",
    },
    {
      id: 2,
      name: "Pedro",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      photo:
        "https://images.pexels.com/photos/193355/pexels-photo-193355.jpeg?h=350&auto=compress&cs=tinysrgb",
    },
  ];
  test("should be return the initial state", () => {
    const result = UserReducer(undefined, { type: undefined });
    expect(result).toEqual(defaultState);
  });
  test("should be add user", () => {
    const result : UserState = {
        users: [{...users[0]}],
      };
    const state = UserReducer(defaultState, addUser(users[0]));
    expect(state).toEqual(result);
  });
  test("should be set users", () => {
    const result : UserState = {
        users,
      };
    const state = UserReducer(defaultState, setUsers(users));
    expect(state).toEqual(result);
  });
});
