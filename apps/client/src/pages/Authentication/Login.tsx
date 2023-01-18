import { Box, Button, Heading } from "@chakra-ui/react";
import LoginForm from "@components/forms/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box mt={12} bg="gray.700" rounded="base" p={4}>
      <Heading fontSize="2xl" mb={4}>
        Login
      </Heading>
      <LoginForm />
      <Link to="/register">
        <Button variant="link">Create an account</Button>
      </Link>
    </Box>
  );
};

export default Login;
