import {create} from "zustand/react";

export interface AccountDataModel {
  username: string | null;
  userId: string | null;
  token: string | null;
  refreshToken: string | null;
}

export interface AuthStoreModel {
  authData: AccountDataModel;
  setAuthData: (authData: AccountDataModel) => void;
}

export const useAuthStore = create<AuthStoreModel>((set) => ({
  authData: {
    username: null,
    userId: null,
    token: null,
    refreshToken: null
  },
  setAuthData: (authData: AccountDataModel) => set({authData})
}))