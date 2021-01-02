import { combineReducers } from "redux";
import participants from './participants';
import slices from './slices';
import ceremony from './ceremony'

export default combineReducers({ participants, slices, ceremony });