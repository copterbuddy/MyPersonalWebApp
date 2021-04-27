import { combineReducers } from "redux";

import Product from "./product";
import Page from "./page";

export default combineReducers({
  Product: Product,
  Page: Page,
});
