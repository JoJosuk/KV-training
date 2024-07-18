import departmentWithTag from "../../../api/departmentApi";
export const departmentApi = departmentWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getDepartmentList: builder.query({
      query: () => "/department",
    }),
  }),
});

export const { useGetDepartmentListQuery } = departmentApi;
