import {
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

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(3).max(64).required(),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
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
