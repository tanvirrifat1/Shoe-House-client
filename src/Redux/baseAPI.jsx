import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../hooks/BaseURL";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://watch-shop-mongoose.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({}),
});
