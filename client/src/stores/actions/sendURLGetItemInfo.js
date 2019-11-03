import { apiCallWithHeader } from "../../services/apiHeaders";
import { SET_ITEM_DETAILS } from "../actionTypes";

export function setItemDetails(itemDetail) {
  return {
    type: SET_ITEM_DETAILS,
    itemDetail
  };
}

export function sendUrl(userData, headers) {
  console.log("send URL is hit");
  return dispatch => {
    console.log("send URL is hit");
    return new Promise((resolve, reject) => {
      return apiCallWithHeader(
        "post",
        `/item/scrapeItem`,
        userData,
        headers
      )
        .then(res => {
          console.log("These are the details");
          console.log(res);
          dispatch(setItemDetails(res));
          resolve();
        })
        .catch(err => {
          reject();
        });
    });
  };
}

