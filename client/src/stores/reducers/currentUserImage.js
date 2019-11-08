import { GET_USER_IMAGE } from "../actionTypes";

const DEFAULT_STATE = {
  userImageUrl: ""
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_USER_IMAGE: {
      return Object.assign({}, state, {
        userImageUrl: action.userImageUrl
      });
    }
    default:
      return state;
  }
};
