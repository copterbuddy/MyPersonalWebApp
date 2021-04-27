import Action from "../actions";

var initialState = {
  productlList: [],
  productID: 0,
};

function Product(state = initialState, action) {
  switch (action.type) {
    case Action.Set_Product_List:
      return { ...state, productlList: action.ProductList };
    case Action.Set_Product_ID:
      return { ...state, productID: action.ProductID };
    default:
      return state;
  }
}

export default Product;
