import Axios, { AxiosRequestConfig } from "axios";

//import API_URL from "@/config";
// import { useNotificationStore } from "@/stores/notifications";
import storage from "@/utils/storage";

function authRequestInterceptor(config: AxiosRequestConfig) {
  const token = window.localStorage.getItem("token");
  if (token) {
    config.headers.authorization = `Token ${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
}

export const axios = Axios.create({
  // baseURL: API_URL,
  baseURL: "http://20.25.70.175:8400/",
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    // useNotificationStore.getState().addNotification({
    //   type: "error",
    //   title: "Error",
    //   message,
    // });

    return Promise.reject(error);
  }
);
