export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...action.courses }];
    case "DELETE_COURSE":
      return [
        ...state.filter((a) => {
          a.id !== action.courses.id;
        }),
      ];
    default:
      return state;
  }
}
