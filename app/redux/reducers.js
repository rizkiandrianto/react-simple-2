export default function reducer(state, action) {
  switch (action.type) {
    case 'GENERAL' :
      const test = Object.assign({}, state, {
        [action.key] : action.value
      });
      console.log(test);
      return Object.assign({}, state, {
        [action.key] : action.value
      });
    default:
      return state
  }
}
