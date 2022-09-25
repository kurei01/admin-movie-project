import { userManagerService } from "services/UserManagerService";
import { SET_USER_INFO, SET_USER_LIST } from "./types/UserManagerType";

export const fetchUserListAction = (key = "") => {
  return async (dispatch) => {
    try {
      const res = await userManagerService.fetchUserList(key);
      dispatch({
        type: SET_USER_LIST,
        payload: res.data.content,
      });
    } catch (error) {
      alert(error.response.data.content);
    }
  };
};

export const addNewUserAction = (values, AddNewsuccess, alertError) => {
  return async (dispatch) => {
    try {
      await userManagerService.addNewUser(values);
      AddNewsuccess();
      dispatch(fetchUserListAction());
    } catch (error) {
      alertError(error.response?.data.content);
    }
  };
};

export const deleteUserAction = (taiKhoan, Deletesuccess) => {
  return async (dispatch) => {
    try {
      await userManagerService.deleteUser(taiKhoan);
      Deletesuccess();
      dispatch(fetchUserListAction());
    } catch (error) {
      alert(error.response.data.content);
    }
  };
};

export const getUserInfoAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const res = await userManagerService.getUserInfo(taiKhoan);
      dispatch({
        type: SET_USER_INFO,
        payload: res.data.content,
      });
    } catch (error) {
      console.log("get User info fail", error.response?.data.content);
    }
  };
};

export const updateUserAction = (values, UpdateUsersuccess, alertError) => {
  return async (dispatch) => {
    try {
      await userManagerService.updateUser(values);
      UpdateUsersuccess();
      dispatch(fetchUserListAction());
    } catch (error) {
      alertError(error.response?.data.content);
    }
  };
};
