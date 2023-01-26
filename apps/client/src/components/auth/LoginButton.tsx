import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/login">
      <Button variant="outline">Login</Button>
    </Link>
  );
};

export default LoginButton;
