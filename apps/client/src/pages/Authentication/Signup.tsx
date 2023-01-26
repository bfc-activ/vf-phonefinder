import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import SignupForm from "@components/forms/SignupForm";
import { Link } from "react-router-dom";

// This is the Signup component, which is a page that contains the SignupForm component.
const Signup = () => {
  return (
    <Box mt={12} bg="gray.700" rounded="base" p={4}>
      <Heading fontSize="2xl" mb={4}>
        Sign up
      </Heading>
      <SignupForm />

      <Flex justifyContent="center" mt={4}>
        <Link to="/login">
          <Button colorScheme="gray" variant="link">
            Login instead
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Signup;
