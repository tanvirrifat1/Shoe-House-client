import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./reducer";
import { baseApi } from "./baseAPI";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
