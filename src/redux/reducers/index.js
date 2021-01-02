import { combineReducers } from "redux";
import participants from './participants';
import slices from './slices';

export default combineReducers({ participants, slices });