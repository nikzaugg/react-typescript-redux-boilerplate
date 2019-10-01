import { createStore } from "redux";
import { appReducer } from '../reducers/appReducer'
import { initialState } from '../reducers/appReducer'

const store = createStore(appReducer, initialState);

export default store;