import apiWithTag from "../../api/employeeApi";

export const employeeApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => "/employee",
    }),
    addEmployee: builder.mutation({
      query: (body) => ({
        url: "/employee",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useGetEmployeeListQuery, useAddEmployeeMutation } = employeeApi;
