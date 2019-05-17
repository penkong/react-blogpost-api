

//produce state from prevState and action
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POST':
      return action.payload;
    default:
      return state; 
  }
} 