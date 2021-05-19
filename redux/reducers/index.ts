import { combineReducers } from "redux";

import userReducer from "./userReducers";

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export type ApplicationStage = ReturnType<typeof rootReducer>;

export { rootReducer };
