export default function(state = {
    selected:false,
    flight:""
  }, action) {
    switch (action.type) {
      case "SELECT_FLIGHT": {
        return {
          ...state,
          selected: action.payload.selected,
          flight:action.payload.flight
        }
          }
      default:
        return state;
    }
  }