import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import LoginForm from "@components/forms/LoginForm";
import useCurrentUser from "@hooks/useCurrentUser";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// This is the Login page, containing the login form.
const Login = () => {
  const { currentUser } = useCurrentUser();
  const navigate = useNavigate();

  // If the user is already logged in, redirect them to the home page.
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <Box mt={12} bg="gray.50" _dark={{ bg: "gray.700" }} rounded="base" p={4}>
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
