import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const departmentBaseApi = createApi({
  reducerPath: "departmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5005",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
const departmentWithTag = departmentBaseApi.enhanceEndpoints({
  addTagTypes: [],
});

export default departmentWithTag;
