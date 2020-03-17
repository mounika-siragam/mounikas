import React, { Component } from "react";
import axios from "axios";

axios.interceptors.response.use(null, error => {
  const expectedErrors = error.response && error.response.status < 500;
  if (!expectedErrors) {
    alert("unknown error");
  }
  //returns promise object with error message
  return Promise.reject(error);
});
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
