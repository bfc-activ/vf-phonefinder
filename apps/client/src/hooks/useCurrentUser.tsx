import api from "../api";
import { useState, useContext, createContext, ReactNode } from "react";

interface ICurrentUser {
  currentUser: {
    name: string;
    email: string;
  } | null;
  login: (email: string, password: string) => Promise<void>;
  loginError: string | null;
  register: () => Promise<void>;
  registerError: string | null;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

// Create a new context with default values
const CurrentUserContext = createContext<ICurrentUser>({
  currentUser: null,
  login: () => Promise.resolve(),
  loginError: null,
  register: () => Promise.resolve(),
  registerError: null,
  logout: () => null,
  isLoading: false,
  error: null,
});

const useProvideCurrentUser = () => {
  // Local state for the state hook
  const [currentUser, setCurrentUser] =
    useState<ICurrentUser["currentUser"]>(null);
  const [isLoading, setLoading] = useState<ICurrentUser["isLoading"]>(false);
  const [error, setError] = useState<ICurrentUser["error"]>(null);
  const [loginError, setLoginError] =
    useState<ICurrentUser["loginError"]>(null);
  const [registerError, setRegisterError] =
    useState<ICurrentUser["registerError"]>(null);

  const login = async (email: string, password: string) => {
    // Run API call to the /login endpoint
    await api
      .post("/login", {
        email,
        password,
      })
      .catch((err) => console.log("error"));

    console.log("hiya");

    // if (res.status !== 200) {
    //   setLoginError("Invalid email or password");
    //   return;
    // }
  };

  const register = async () => {
    return;
  };

  const logout = async () => {
    setCurrentUser(null);
  };

  // Return all the available hook functions / values
  return {
    currentUser,
    login,
    register,
    logout,
    isLoading,
    error,
    loginError,
    registerError,
  };
};

// Creates a provider which is sent to Context.tsx
export const CurrentUserProvider = ({ children }: { children?: ReactNode }) => {
  const user: ICurrentUser = useProvideCurrentUser();

  return (
    <CurrentUserContext.Provider value={user}>
      {children}
    </CurrentUserContext.Provider>
  );
};

// Export the hook to be used in other components
const useCurrentUser = () => useContext(CurrentUserContext);
export default useCurrentUser;
