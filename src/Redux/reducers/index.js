import { combineReducers } from "redux";
import todo from "./todo.js";
import flight from './flight.js';
import messageArray from './messageArray.js';

export default combineReducers({todo, flight, messageArray});
