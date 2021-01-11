import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestApi, RequestEnum } from "src/models/api";

export const defaultState: RequestApi = {
  name: RequestEnum.NotRequest,
  numberRequest: 0,
  params: null,
  refreshLoading: false,
};

const updateRequest = (numberRequest = 0) => {
  return (numberRequest += 1);
};

const { reducer: RequestReducer, actions } = createSlice({
  name: "request",
  initialState: defaultState,
  reducers: {
    tryRequestApi: (state) => {
      state.numberRequest = updateRequest(state.numberRequest);
    },

    setRequestApi: (state, action: PayloadAction<RequestApi>) => {
      if (action.payload.name !== RequestEnum.NotRequest) {
        state.params = action.payload.params;
        state.numberRequest = updateRequest(state.numberRequest);
        state.refreshLoading = action.payload.refreshLoading;
      }
      state.name = action.payload.name;
    },
  },
});

export { RequestReducer };

export const { tryRequestApi, setRequestApi } = actions;
