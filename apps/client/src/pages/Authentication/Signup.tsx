import { Box, Heading } from "@chakra-ui/react";
import SignupForm from "@components/forms/SignupForm";

const Signup = () => {
  return (
    <Box mt={12} bg="gray.700" rounded="base" p={4}>
      <Heading fontSize="2xl" mb={4}>
        Sign up
      </Heading>
      <SignupForm />
    </Box>
  );
};

export default Signup;
