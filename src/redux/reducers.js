import { combineReducers } from "redux";

import cart from "./cart/reducers";
import shelf from "./shelf/reducers";

export default combineReducers({ cart, shelf });
