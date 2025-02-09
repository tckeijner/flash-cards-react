import {create} from "zustand/react";

export interface AccountDataModel {
  username: string | null;
  userId: string | null;
  token: string | null;
  refreshToken: string | null;
}

export interface AuthStoreModel {
  authData: AccountDataModel;
  authError: string | null;
  setAuthData: (authData: AccountDataModel) => void;
  setAuthError: (error: any) => void;
}

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
      localStorage.setItem("authToken", authData.token);
    }
    if (authData.refreshToken) {
      localStorage.setItem("refreshToken", authData.refreshToken);
    }
    set({authData});
  },
  setAuthError: (error: any) => set({authError: error?.toString()}),
}));