import { store } from "./store";
import { cleanup } from "@testing-library/react";
import { defaultStatusUser, defaultStatusRequest } from "./reducers";

describe("store ", () => {
  afterEach(cleanup);

  test("should be loading Selector", () => {
    const defaultsStates = {
      userReducer: defaultStatusUser,
      requestReducer: defaultStatusRequest,
    };

    expect(store.getState()).toEqual(defaultsStates);
  });
});
