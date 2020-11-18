import { combineReducers } from 'redux';
import { SEARCH_RESULTS, USER_HISTORY, } from "../actions";

const results = (state = [], action) => {
  switch (action.type) {
    case SEARCH_RESULTS:
      return action.results;
    default:
      return state;
  }
};

const history = (state = [], action) => {
  switch (action.type) {
    case USER_HISTORY:
      return state.concat(action.query)
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  results,
  history
});

export default rootReducer;