import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AppShell = () => (
  <Box position="relative" minH="100vh">
    <Navbar />
    <Container paddingBottom="7rem">
      <Outlet />
    </Container>
    <Footer />
  </Box>
);

export default AppShell;
