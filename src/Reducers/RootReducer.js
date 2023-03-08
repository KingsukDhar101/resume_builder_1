import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { experienceReducer } from "./experienceReducer";
import { educationReducer } from "./educationReducer";
import { summaryReducer } from "./summaryReducer";
import { skillReducer } from "./skillReducer";
import { finalizeReducer } from "./finalizeReducer";
import { colorReducer } from "./colorReducer";
import { fontSizeReducer, fontStyleReducer } from "./fontReducer";
import {userReducer} from './userReducer';

const rootReducer = combineReducers({
  contactReducer,
  experienceReducer,
  educationReducer,
  summaryReducer,
  skillReducer,
  finalizeReducer,
  colorReducer,
  fontSizeReducer,
  fontStyleReducer,
  userReducer,
});

export default rootReducer;
