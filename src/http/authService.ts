import {httpClient} from "./httpClient.ts";

export const login = (username: string, password: string) => {
  return httpClient.post("/users/login", {username, password});
};