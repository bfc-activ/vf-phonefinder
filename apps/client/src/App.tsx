import initMirage from "./mirage/index";
import { CurrentUserProvider } from "./hooks/useCurrentUser";
import Fonts from "./components/layout/Fonts";
import Router from "./Router";

const App = () => {
  // Initialise the Mirage.js Mocking Server.
  initMirage();

  return (
    <CurrentUserProvider>
      <Fonts />
      <Router />
    </CurrentUserProvider>
  );
};

export default App;
