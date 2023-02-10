import { Box, Container } from "@chakra-ui/react";
import { CurrentUserProvider } from "@hooks/useCurrentUser";
import { OnlineStatusProvider } from "@hooks/useOnlineStatus";
import { Outlet } from "react-router-dom";
import Fonts from "./Fonts";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AppShell = () => (
  <CurrentUserProvider>
    <OnlineStatusProvider>
      <Fonts />
      <Box position="relative" minH="100vh">
        <Navbar />
        <Container maxW="5xl" paddingBottom="7rem">
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </OnlineStatusProvider>
  </CurrentUserProvider>
);

export default AppShell;
