import { baseApi } from "../baseAPI";

const MENU_API = "/menu";

const watchApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleWatch: build.query({
      query: (id) => ({
        url: `${MENU_API}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSingleWatchQuery } = watchApi;
