import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "656896c4c4ad41c69db356d352ba9e15";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      "x-api-key": API_KEY,
    },
  }),
  endpoints: (builder) => ({
    getGeneralNews: builder.query({
      query: () => `/top-headlines?country=us&category=general&pageSize=20`,
    }),
    getPoliticsNews: builder.query({
      query: () => `/top-headlines?country=us&category=politics&pageSize=10`,
    }),
    getBusinessNews: builder.query({
      query: () => `/top-headlines?country=us&category=business&pageSize=10`,
    }),
    getEntertainmentNews: builder.query({
      query: () =>
        `/top-headlines?country=us&category=entertainment&pageSize=10`,
    }),
    getHealthNews: builder.query({
      query: () => `/top-headlines?country=us&category=health&pageSize=10`,
    }),
  }),
});
