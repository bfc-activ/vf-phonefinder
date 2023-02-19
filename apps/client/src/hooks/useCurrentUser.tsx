import api from "../api";
import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

type User = {
  name: string;
  email: string;
  isAdmin: boolean;
  id: string;
};

interface ICurrentUser {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  setLoginError: (error: string | null) => void;
  loginError: string | null;
  register: (email: string, password: string, name: string) => Promise<void>;
  registerError: string | null;
  registerMessage: string | null;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

// Create a new context with default values
const CurrentUserContext = createContext<ICurrentUser>({
  currentUser: null,
  login: () => Promise.resolve(),
  setLoginError: () => null,
  loginError: null,
  register: () => Promise.resolve(),
  registerError: null,
  registerMessage: null,
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
  const [registerMessage, setRegisterMessage] =
    useState<ICurrentUser["registerMessage"]>(null);

  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    setRegisterMessage(null);

    // Run API call to the /login endpoint
    const res = await api
      .post("/login", {
        email,
        password,
      })
      .catch((err) => {
        setLoginError(err.response.data.error);
      });

    if (!res) return;

    const { token } = res.data;

    // Decode the token to get the user data
    localStorage.setItem("jwtToken", token);
    const decodedUser = jwt_decode(token);

    // Set the current user as the decoded user
    setCurrentUser(decodedUser as User);
  };

  const register = async (email: string, password: string, name: string) => {
    // Run API call to the /login endpoint
    await api
      .post("/register", {
        email,
        password,
        name,
      })
      .then(() => {
        // If register succeeds, set the register message and redirect to the login page.
        setRegisterMessage("Registration successful. Please log in.");
        navigate("/login");
      })
      .catch((err) => {
        // If register fails, set the register error.
        setRegisterError(err.response.data.error);
      });
  };

  const logout = async () => {
    setCurrentUser(null);
    localStorage.removeItem("jwtToken");
  };

  // Once the app mounts, check if the jwtToken is in localStorage,
  // if it is, then set the currentUser as the decoded user.
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const decodedUser = jwt_decode(token);
      setCurrentUser(decodedUser as User);
    }
  }, []);

  // Return all the available hook functions / values
  return {
    currentUser,
    login,
    register,
    logout,
    isLoading,
    error,
    loginError,
    setLoginError,
    registerError,
    registerMessage,
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
