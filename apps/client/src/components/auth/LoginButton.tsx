import { Button, ButtonProps } from "@chakra-ui/react";
import { useState } from "react";
import LoginModal from "./LoginModal";

const LoginButton = (props: ButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} {...props}>
        Login
      </Button>
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default LoginButton;
