import { useContext, useState } from "react";
import { AuthContext } from "../context/auth/auth.context";

export const useAuth = () => {
  const { loginWithFb, loginWithGoogle, logout } = useContext(AuthContext);
  const [error, setError] = useState(false);

  const handlerLoginWithFb = async () => {
    try {
      await loginWithFb();
    } catch (error) {
      setError(error.message);
    }
  };

  const handlerLoginWithGoogle = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      setError(error.message);
    }
  };

  const handlerSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      setError(error.message);
    }
  };

  return [handlerLoginWithFb, handlerLoginWithGoogle, handlerSignOut, error];
};
