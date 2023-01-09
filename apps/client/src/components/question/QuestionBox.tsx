import {
  Box,
  Heading,
  SimpleGrid,
  SlideFade,
  Text,
  VStack,
  useRadioGroup,
} from "@chakra-ui/react";
import OptionBox from "./OptionBox";
import { Question } from "../../types/Question";

const QuestionBox = ({ options, displayName }: Question) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "option",
    defaultValue: "",
    // eslint-disable-next-line no-console
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <SlideFade in>
      <Box>
        <VStack mb={12} textAlign="center">
          <Text color="gray.500">Question 1/6</Text>
          <Heading size="lg">{displayName}</Heading>
        </VStack>

        <SimpleGrid {...group} spacing={4} columns={2}>
          {options.map((opt) => {
            const radio = getRadioProps({ value: opt.value });
            return (
              <OptionBox
                image={opt.image}
                value={opt.value}
                key={opt.value}
                {...radio}
              >
                {opt.title}
              </OptionBox>
            );
          })}
        </SimpleGrid>
      </Box>
    </SlideFade>
  );
};

export default QuestionBox;
