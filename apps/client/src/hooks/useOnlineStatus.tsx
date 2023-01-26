import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";

// This hook is used to check if the user is online or offline
// The default value is true.
const OnlineStatusContext = createContext(true);

// The provider is used to wrap the app and check the online status
// allowing for the use of the hook in any component.
export const OnlineStatusProvider = ({ children }: { children: ReactNode }) => {
  const [onlineStatus, setOnlineStatus] = useState<boolean>(true);

  // Add event listeners to check if the user is online or offline
  useEffect(() => {
    window.addEventListener("offline", () => {
      // If the user is offline, set the online status to false
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      // If the user is online, set the online status to true
      setOnlineStatus(true);
    });

    // Remove the event listeners when the component unmounts
    return () => {
      window.removeEventListener("offline", () => {
        setOnlineStatus(false);
      });
      window.removeEventListener("online", () => {
        setOnlineStatus(true);
      });
    };
  }, []);

  return (
    <OnlineStatusContext.Provider value={onlineStatus}>
      {children}
    </OnlineStatusContext.Provider>
  );
};

// Export the hook to be used in other components
const useOnlineStatus = () => useContext(OnlineStatusContext);
export default useOnlineStatus;
