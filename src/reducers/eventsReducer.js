function eventsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_IMG":
      return [...state, action.payload];
    default:
      return state;
  }
}
export default eventsReducer;
