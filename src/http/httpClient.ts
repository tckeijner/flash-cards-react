import axios from "axios";
import {Tokens} from "../models/authModels.ts";

export const httpClient = axios.create({
  baseURL: "http://localhost:5200"
});

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(Tokens.Authentication);

    if (token) {
      config.headers.Token = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);