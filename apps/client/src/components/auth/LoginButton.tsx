import { Button, ButtonProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LoginButton = (props: ButtonProps) => {
  return (
    <Link to="/login">
      <Button variant="outline" colorScheme="gray">
        Login
      </Button>
    </Link>
  );
};

export default LoginButton;
