import {create} from "zustand/react";
import {AccountDataModel, Tokens} from "../models/authModels.ts";
import {AxiosError} from "axios";

export interface AuthStoreModel {
  authData: AccountDataModel;
  authError: string | null;
  setAuthData: (authData: AccountDataModel) => void;
  setAuthError: (error: AxiosError | null) => void;
  clearAuthData: () => void;
}

const defaults = {
  authData: {
    username: null,
    userId: null,
    token: null,
    refreshToken: null
  },
  authError: null,
};

export const useAuthStore = create<AuthStoreModel>((set) => ({
  authData: {
    username: null,
    userId: null,
    token: null,
    refreshToken: null
  },
  authError: null,
  setAuthData: (authData: AccountDataModel) => {
    if (authData.token) {
      localStorage.setItem(Tokens.Authentication, authData.token);
    }
    if (authData.refreshToken) {
      localStorage.setItem(Tokens.Refresh, authData.refreshToken);
    }
    set({authData});
  },
  setAuthError: (error: AxiosError | null) => {
    localStorage.removeItem(Tokens.Authentication);
    localStorage.removeItem(Tokens.Refresh);
    set({authError: error?.toString()});
  },
  clearAuthData: () => {
    localStorage.removeItem(Tokens.Authentication);
    localStorage.removeItem(Tokens.Refresh);
    set(defaults);
  },
}));