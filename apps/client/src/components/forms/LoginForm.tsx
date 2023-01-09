import { FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <Stack spacing={4}>
      <FormControl variant="floating">
        <Input placeholder=" " />
        {/* It is important that the Label comes after the Control due to css selectors */}
        <FormLabel>Email address</FormLabel>
      </FormControl>

      <FormControl variant="floating">
        <Input placeholder=" " type="password" />
        <FormLabel>Password</FormLabel>
      </FormControl>
    </Stack>
  );
};

export default LoginForm;
