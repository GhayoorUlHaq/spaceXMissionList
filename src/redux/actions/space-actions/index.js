import * as TYPES from '../types';

//Sign up obj Action
export const getMissions = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.SPACE_API_REQUEST,
    cbSuccess,
    cbFailure,
  };
};
