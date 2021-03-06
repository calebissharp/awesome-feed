import base64 from 'base-64';
import { handleActions } from 'redux-actions';
import { defineState } from 'redux-localstore';
import { SET_TOKEN, SET_USERNAME } from './actions';

const defaultState = {
  token: null,
  username: null,
};

const initialState = defineState(defaultState)(`Login`);

export default handleActions(
  {
    [SET_TOKEN]: (state, action) => ({
      ...state,
      token: base64.encode(`arojunior:${action.payload.data}`),
    }),
    [SET_USERNAME]: (state, action) => ({
      ...state,
      username: action.payload,
    }),
  },
  initialState,
);
