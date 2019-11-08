import { GET_USER_IMAGE } from "../actionTypes";
import { apiCallWithHeader } from "../../services/apiHeaders";

export function setCurrentUserImage(userImageUrl) {
  return {
    type: GET_USER_IMAGE,
    userImageUrl
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
          dispatch(setCurrentUserImage(res.data.profilePictureUrl));
        })
        .catch(err => {
          reject();
        });
    });
  };
}
