import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
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
          <Button>Let's get started</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Home;
