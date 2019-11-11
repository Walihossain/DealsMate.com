import { GET_USER_IMAGE, CLEAR_USER_IMAGE } from "../actionTypes";
import { apiCallWithHeader } from "../../services/apiHeaders";

export function setCurrentUserImage(userImageUrl) {
  console.log("set current user Image is fired after");
  return {
    type: GET_USER_IMAGE,
    userImageUrl
  };
}

export function clearCurrentUserImage() {
  console.log("clear current user image is fired");
  return {
    type: CLEAR_USER_IMAGE
  };
}

export function loadCurrentUserImage(headers) {
  console.log("loadCurrentUserImage is fired");
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCallWithHeader("get", `/uploadPicture`, headers)
        .then(res => {
          console.log("this is image url coming back");
          console.log(res.data);
          //   dispatch(clearCurrentUserImage());
          dispatch(setCurrentUserImage(res.data.profilePictureUrl));
        })
        .catch(err => {
          reject();
        });
    });
  };
}
