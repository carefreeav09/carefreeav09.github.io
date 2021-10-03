import {
  getLocalStorage,
  clearLocalStorage,
} from "./storageUtil";
import { JWT_TOKEN } from "../constants";
import history from "./history";


export let getToken = () => {
  if (getLocalStorage(JWT_TOKEN)) {
    return getLocalStorage(JWT_TOKEN);
  }
};

export let isAuthenticated = () => {
  return !!getToken();
  // return true;
};

export let getUserData = () => {
  return getLocalStorage("COS_MILANO_USER_INFO");
};

export let isUserLoggedIn = () => {
  return !!getUserData();
};

export const logout = () => {
  clearLocalStorage(JWT_TOKEN);
  history.push("/");
};
