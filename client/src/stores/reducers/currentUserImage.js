import { GET_USER_IMAGE, CLEAR_USER_IMAGE } from "../actionTypes";

const DEFAULT_STATE = {
  userImageUrl: "",
  userImageDate: Date.now()
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_USER_IMAGE: {
      return Object.assign({}, state, {
        userImageUrl: action.userImageUrl,
        userImageDate: Date.now()
      });
    }
    case CLEAR_USER_IMAGE: {
      return Object.assign({}, state, {
        userImageUrl: ""
      });
    }
    default:
      return state;
  }
};
