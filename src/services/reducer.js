import * as actions from './actionType';

// Central Storage
const initState = { userData: {} };

const reducer = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case actions.GET_USER_DATA:
      return { ...state, userData: { ...action.payload } };
    default:
      return state;
  }

  return state;
};

export default reducer;
