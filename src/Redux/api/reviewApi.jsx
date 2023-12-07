import { baseApi } from "../baseAPI";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    deleteReviews: build.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
    }),

    createReviews: build.mutation({
      query: (body) => ({
        url: "/reviews/create-reviews",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useDeleteReviewsMutation, useCreateReviewsMutation } = reviewApi;
