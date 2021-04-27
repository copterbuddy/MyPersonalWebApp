import Action from "./";

export function setProductList(data) {
  return {
    type: Action.Set_Product_List,
    PageID: data,
  };
}

export function setProductID(data) {
  return {
    type: Action.Set_Product_ID,
    PageID: data,
  };
}
