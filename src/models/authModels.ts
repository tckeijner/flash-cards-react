export interface AccountDataModel {
  username: string | null;
  userId: string | null;
  token: string | null;
  refreshToken: string | null;
}

export enum Tokens {
  Authentication = "authToken",
  Refresh = "refreshToken",
}