import apiWithTag from "../../api/employeeApi";

export const employeeApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => "/employee",
      providesTags: ["EMPLOYEE_LIST"],
    }),
    getEmployeeDetails: builder.query({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "GET",
      }),
    }),
    addEmployee: builder.mutation({
      query: (body) => ({
        url: "/employee",
        method: "POST",
        body,
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
    editEmployee: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/employee/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),

    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
  }),
});
export const {
  useGetEmployeeListQuery,
  useAddEmployeeMutation,
  useGetEmployeeDetailsQuery,
  useDeleteEmployeeMutation,
  useEditEmployeeMutation,
} = employeeApi;
