import { combineReducers } from "redux";

import cart from "./cart";
import shelf from "./shelf";

export default combineReducers({ cart, shelf });
