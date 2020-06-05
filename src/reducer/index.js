  const product_list = [
  ]


const reducer = (state=product_list, action) => {
  switch(action.type) 
  {
    case 'CREATE_PRODUCT':
      state.push(action.payload);
      return [...state]; 
  } 
  return state; 

}
export default reducer;