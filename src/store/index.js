import { createStore, combineReducers } from "redux";

import reduceCounter from "./modules/counter/reducer";

const reducers = combineReducers({counter: reduceCounter})

const store = createStore(reducers)

export default store