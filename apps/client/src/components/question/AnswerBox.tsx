import {
  Box,
  Flex,
  Heading,
  Image,
  UseRadioProps,
  useRadio,
} from "@chakra-ui/react";

const AnswerBox = (
  props: ({ image?: string; children: string } & UseRadioProps) | undefined
) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        _checked={{
          bg: "red.600",
          color: "white",
          _hover: { bg: "red.700" },
          _dark: {
            _hover: { bg: "red.700" },
          },
        }}
        _hover={{
          bg: "gray.100",
        }}
        _dark={{
          borderColor: "gray.700",
          _hover: {
            bg: "gray.800",
          },
        }}
        transition="all .1s ease-in-out"
        border="1px"
        borderColor="gray.300"
        cursor="pointer"
        rounded="md"
        shadow="md"
        p={4}
      >
        <Flex direction="column" align="center">
          {props?.image && (
            <Image
              rounded="md"
              src={props?.image}
              alt="Raid Shadow Legends"
              width="100px"
            />
          )}

          <Heading mt={props?.image && 4} textAlign="center" size="sm">
            {props?.children}
          </Heading>
        </Flex>
      </Box>
    </Box>
  );
};

export default AnswerBox;
