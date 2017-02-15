export default function reducer(state, action) {
  switch (action.type) {
    case 'GENERAL' :
      return Object.assign({}, state, {
        [action.key] : action.value
      });
    default:
      return state
  }
}
