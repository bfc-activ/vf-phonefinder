import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from "react";

interface ICurrentUser {
  currentUser: {
    displayName: string;
    email: string;
  } | null;
  getCurrentUser: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  register: () => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

// Create a new context with default values
const CurrentUserContext = createContext<ICurrentUser>({
  currentUser: null,
  getCurrentUser: () => Promise.resolve(),
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
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

  // Fetch the permissions & update the state
  const getCurrentUser = async () => {
    setLoading(true);
    setLoading(false);
  };

  const login = async () => {
    setCurrentUser({
      displayName: "John Doe",
      email: "",
    });
  };

  const register = async () => {
    return;
  };

  const logout = async () => {
    setCurrentUser(null);
  };

  // Load the permissions once on load
  useEffect(() => {
    getCurrentUser();
  }, []);

  // Return all the available hook functions / values
  return {
    currentUser,
    getCurrentUser,
    login,
    register,
    logout,
    isLoading,
    error,
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
