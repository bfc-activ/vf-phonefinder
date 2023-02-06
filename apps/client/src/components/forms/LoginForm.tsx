import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useCurrentUser from "@hooks/useCurrentUser";
import axios from "axios";

// YUP Validation Schema for the LoginForm.
const schema = yup
  .object({
    // Email has to be a string, required and a valid email.
    email: yup.string().email().required(),
    // Password has to be a string, required and between 3 and 64 characters.
    password: yup.string().min(3).max(64).required(),
  })
  // .required() is needed to ensure the validation is mandatory.
  .required();

// LoginForm component, which contains the form and the validation logic.
const LoginForm = () => {
  // Create the form state from react-hook-form and apply the validation schema.
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    // Use yupResolver to validate the form.
    resolver: yupResolver(schema),
    // Validate the form on every input change.
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { login, loginError, registerMessage } = useCurrentUser();

  // onSubmit function, which is called when the form is submitted.
  const onSubmit = async (data: { email: string; password: string }) => {
    await login(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {loginError && (
        <Alert mb={8} status="error">
          <AlertIcon />
          <AlertDescription>{loginError}</AlertDescription>
        </Alert>
      )}

      {registerMessage && (
        <Alert mb={8} status="success">
          <AlertIcon />
          <AlertDescription>{registerMessage}</AlertDescription>
        </Alert>
      )}

      <Stack mt={4} spacing={4}>
        <FormControl variant="floating" isInvalid={errors.email ? true : false}>
          <Input {...register("email")} placeholder=" " />
          <FormLabel>Email address</FormLabel>
          <FormErrorMessage>
            <>{errors.email?.message}</>
          </FormErrorMessage>
        </FormControl>

        <FormControl
          variant="floating"
          isInvalid={errors.password ? true : false}
        >
          <Input {...register("password")} placeholder=" " type="password" />
          <FormLabel>Password</FormLabel>
          <FormErrorMessage>
            <>{errors.password?.message}</>
          </FormErrorMessage>
        </FormControl>

        <Button type="submit" isDisabled={!isDirty}>
          Login
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
