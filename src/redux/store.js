import {lagacy_createStore as createStore} from "react-redux";     //import from redux
import reducer from "./reducer";

const store = createStore(reducer);

export default store;