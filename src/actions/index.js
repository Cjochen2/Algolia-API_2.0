export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const USER_HISTORY = 'USER_HISTORY';

export const searchResults = (results) => {
  return {
    type: SEARCH_RESULTS,
    results
  }
};

export const userHistory = (query) => {
  return {
    type: USER_HISTORY,
    query
  }
};