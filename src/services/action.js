import * as actions from './actionType';

export const onGetUserData = (val) => {
  return {
    type: actions.GET_USER_DATA,
    payload: val,
  };
};
