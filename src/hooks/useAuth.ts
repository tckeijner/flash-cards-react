import {useAuthStore} from "../store/authStore.ts";
import {login} from "../http/authService.ts";

export const useAuth = () => {
  const {setAuthData, setAuthError} = useAuthStore();

  const handleLogin = async (username: string, password: string) => {
    await login(username, password)
      .then(response => setAuthData(response.data))
      .catch(setAuthError);
  };

  return {
    handleLogin
  };
};