import * as TYPES from '../actions/types';

const initialState = {
  list: [],
};

const missions = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.SPACE_API_SUCCESS:
      return {
        ...state,
        list: actions.data,
      };
    default:
      return state;
  }
};
export default missions;
