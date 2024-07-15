const actionTypes = {
  DELETE_EMPLOYEE: "DELETE_EMPLOYEE",
  ADD_EMPLOYEE: "ADD_EMPLOYEE",
  EDIT_EMPLOYEE: "EDIT_EMPLOYEE",
  CHANGE_STATUS: "CHANGE_STATUS",
};
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case actionTypes.ADD_EMPLOYEE:
      return {
        ...state,
        employee: [...state.employee, action.payload],
      };
    case actionTypes.DELETE_EMPLOYEE:
      return {
        ...state,
        employee: state.employee.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    case actionTypes.EDIT_EMPLOYEE:
      console.log("hello edit here");
      return {
        ...state,
        employee: state.employee.map((e) => {
          if (e.id === action.payload.id) return action.payload;
          else return e;
        }),
      };
  }
};

export { reducer as default, actionTypes };
