export default function(state = {
  selected:false,
  service:""
}, action) {
  switch (action.type) {
    case "SELECT_TODO": {
      return {
        ...state,
        selected: action.payload.selected,
        service: action.payload.service
      }
        }
    default:
      return state;
  }
}