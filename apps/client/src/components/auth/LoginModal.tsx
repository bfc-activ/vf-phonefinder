import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import LoginForm from "../forms/LoginForm";
import useCurrentUser from "@hooks/useCurrentUser";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const { login } = useCurrentUser();
  const [formState, setFormState] = useState<"LOGIN" | "REGISTER">("LOGIN");
  const isLogin = formState === "LOGIN";

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isLogin ? "Login" : "Register"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <LoginForm />
        </ModalBody>

        <ModalFooter justifyContent="left">
          <Button
            colorScheme="red"
            mr={3}
            onClick={() => login("ingus.jansons@vodafone.com", "123")}
          >
            {isLogin ? "Login" : "Register"}
          </Button>
          <Button
            onClick={() => setFormState(isLogin ? "REGISTER" : "LOGIN")}
            variant="ghost"
          >
            {isLogin ? "Create an Account" : "Login instead"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
