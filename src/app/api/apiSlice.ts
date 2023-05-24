import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://stage.whgstage.com",
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: ["games"],
});
