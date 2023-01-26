import {
  Box,
  Heading,
  SimpleGrid,
  SlideFade,
  Text,
  VStack,
  useRadioGroup,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import AnswerBox from "./AnswerBox";
import { Question } from "../../types/Questions";
import { useState } from "react";

interface QuestionBoxProps {
  questionCount: number;
}

const QuestionBox = ({
  answers,
  title,
  order,
  type,
  questionCount,
}: Question & QuestionBoxProps) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "option",
    defaultValue: "",
    // eslint-disable-next-line no-console
    onChange: console.log,
  });

  const group = getRootProps();

  // Local state for the slider value changes
  const [sliderValue, setSliderValue] = useState(1);

  return (
    <SlideFade in>
      <Box>
        <VStack mb={12} textAlign="center">
          <Text color="gray.500">
            Question {order}/{questionCount}
          </Text>
          <Heading size="lg">{title}</Heading>
        </VStack>

        {/* Render the Slider answer option if the question type is "slider" */}
        {type === "slider" && (
          <Slider
            size="lg"
            min={0}
            max={answers.length - 1} // Take away one because the index starts at 0
            colorScheme="brand"
            value={sliderValue}
            onChange={(v) => setSliderValue(v)}
          >
            {answers.map((answer, i) => (
              <SliderMark key={i} value={i} mt={3} ml={-2.5}>
                {answer.displayName}
              </SliderMark>
            ))}

            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>

            <SliderThumb
              _focus={{ boxShadow: "0 0 0 3px rgba(255,158,158, 0.6);" }}
            />
          </Slider>
        )}

        {/* Render the single or multiple choice answers based on the question type */}
        <SimpleGrid {...group} spacing={4} columns={2}>
          {type === "single_choice" &&
            answers?.map((answer) => {
              const radio = getRadioProps({ value: answer.tagId });
              return (
                <AnswerBox
                  image={answer.photoURL || undefined}
                  value={answer.tagId}
                  key={answer.tagId}
                  {...radio}
                >
                  {answer.displayName}
                </AnswerBox>
              );
            })}
        </SimpleGrid>
      </Box>
    </SlideFade>
  );
};

export default QuestionBox;
