import initMirage from "./mirage/index";
import { CurrentUserProvider } from "./hooks/useCurrentUser";
import Fonts from "./components/layout/Fonts";
import Router from "./Router";
import { OnlineStatusProvider } from "@hooks/useOnlineStatus";

const App = () => {
  // Initialise the Mirage.js Mocking Server.
  initMirage();

  return (
    <CurrentUserProvider>
      <OnlineStatusProvider>
        <Fonts />
        <Router />
      </OnlineStatusProvider>
    </CurrentUserProvider>
  );
};

export default App;
