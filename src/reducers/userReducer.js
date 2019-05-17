

//produce state from prevState and action reducer pick data from action
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state ,action.payload];
    default:
      return state; 
  }
} 