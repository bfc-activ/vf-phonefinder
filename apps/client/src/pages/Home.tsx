import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import useCurrentUser from "@hooks/useCurrentUser";
import {
  MdDarkMode,
  MdLogin,
  MdShoppingCart,
  MdSmartphone,
  MdWifiOff,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const { currentUser } = useCurrentUser();

  return (
    <Box pt={24}>
      <Stack textAlign="center">
        <Heading size="2xl" mb={2}>
          Welcome to Vodafone PhoneFinder
        </Heading>
        <Heading size="md" color="gray.500">
          The all-in-one Wizard to Select your Best Suited phone.
        </Heading>
      </Stack>

      <Flex mt={8} justifyContent="center">
        <Link to="/question/1">
          <Button isDisabled={!currentUser} fontWeight="bold">
            {!currentUser ? "Login first to Start Quiz" : "Start Phone Quiz"}
          </Button>
        </Link>
      </Flex>

      {/* Create a grid with icons describing the app's features */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        mt={12}
        gap={6}
      >
        <Box p={5} shadow="md" borderWidth="1px">
          <Icon as={MdLogin} fontSize="4xl" />
          <Heading fontSize="xl">Authentication</Heading>
          <Text mt={2}>
            Sign in with your Email account to complete the quiz and personalise
            your experience.
          </Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Icon as={MdWifiOff} fontSize="4xl" />
          <Heading fontSize="xl">Offline Capability</Heading>
          <Text mt={2}>
            Complete the quiz even when offline and submit when you're back
            online.
          </Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Icon as={MdSmartphone} fontSize="4xl" />
          <Heading fontSize="xl">Modern Phone Database</Heading>
          <Text mt={2}>
            Get a modern phone recommendation based on your needs and
            preferences.
          </Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Icon as={MdShoppingCart} fontSize="4xl" />
          <Heading fontSize="xl">Instant Purchase Link</Heading>
          <Text mt={2}>
            Get an instant quote for your recommended phone and purchase it
            directly from Vodafone UK.
          </Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Icon as={MdDarkMode} fontSize="4xl" />
          <Heading fontSize="xl">Light & Dark Theme</Heading>
          <Text mt={2}>
            Switch between light and dark theme to suit your preference.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Home;
