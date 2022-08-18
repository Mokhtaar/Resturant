import { createStore } from "redux";
import reducers from "./reducers/index"

const store = createStore (
    reducers,
    {} //default state
)

export default store