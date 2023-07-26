import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import { publicRequest } from "../requestMethods";
import axios from "axios";
axios.defaults.withCredentials = true;

export const login = async (dispatch, user) => {
  console.log("logging in");
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", user, {withCredentials: true});
    console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logOut = async (dispatch) => {
  dispatch(logout());
  try {
    const res = await axios.post("http://localhost:5000/api/auth/logout", {withCredentials: true});
    console.log(res.data);
    // if(res.data.success === true){
    //   dispatch(logout());
    // }
    
  } catch (err) {
    console.log(err);
  }
};

export const register = async (user) => {
  console.log("registering");
  try {
    const res = await axios.post("http://localhost:5000/api/auth/register", user, {withCredentials: true});
    console.log(res.data);
    window.location.href = "http://localhost:3000/login";
  } catch (err) {
    
  }
};

export const makeRequest = async (request) => {
  console.log(request);
  try {
    const res = await axios.post("http://localhost:5000/api/requests/", request, {withCredentials: true});
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};