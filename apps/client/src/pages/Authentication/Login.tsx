import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import LoginForm from "@components/forms/LoginForm";
import { Link } from "react-router-dom";

// This is the Login page, containing the login form.
const Login = () => {
  return (
    <Box mt={12} bg="gray.700" rounded="base" p={4}>
      <Heading fontSize="2xl" mb={4}>
        Login
      </Heading>
      <LoginForm />

      <Flex justifyContent="center" mt={4}>
        <Link to="/register">
          <Button colorScheme="gray" variant="link">
            Create an account
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Login;
