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
import { useState } from "react";

// YUP Validation Schema for the SignupForm.
const schema = yup
  .object({
    // Display Name has to be at least 2 characters long and max 32 characters long.
    name: yup.string().min(2).max(32).required(),
    // Email has to be a string, required and a valid email.
    email: yup.string().email().required(),
    // Password has to be a string, required and between 3 and 64 characters.
    password: yup.string().min(3).max(64).required(),
    // Confirm Password has to be a string, required and match the password.
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  })
  // .required() is needed to ensure the validation is mandatory.
  .required();

// SignupForm component, which contains the form and the validation logic.
const SignupForm = () => {
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
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    register: onRegister,
    registerError,
    registerMessage,
  } = useCurrentUser();
  const [registerLoading, setRegisterLoading] = useState<boolean>(false);

  // onSubmit function, which is called when the form is submitted.
  const onSubmit = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    setRegisterLoading(true);
    await onRegister(data.email, data.password, data.name);
    setRegisterLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {(registerError || registerMessage) && (
        <Alert mb={8} status={registerError ? "error" : "success"}>
          <AlertIcon />
          <AlertDescription>
            {registerError || registerMessage}
          </AlertDescription>
        </Alert>
      )}

      <Stack spacing={4}>
        <FormControl variant="floating" isInvalid={errors.name ? true : false}>
          <Input {...register("name")} placeholder=" " />
          <FormLabel>Display name</FormLabel>
          <FormErrorMessage>
            <>{errors.name && errors.name.message}</>
          </FormErrorMessage>
        </FormControl>

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

        <FormControl
          variant="floating"
          isInvalid={errors.confirmPassword ? true : false}
        >
          <Input
            {...register("confirmPassword")}
            placeholder=" "
            type="password"
          />
          <FormLabel>Confirm password</FormLabel>
          <FormErrorMessage>
            <>{errors.confirmPassword?.message}</>
          </FormErrorMessage>
        </FormControl>

        <Button type="submit" isLoading={registerLoading} isDisabled={!isDirty}>
          Create account
        </Button>
      </Stack>
    </form>
  );
};

export default SignupForm;
