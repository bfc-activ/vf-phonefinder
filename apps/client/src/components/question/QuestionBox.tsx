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
import MultiChoiceAnswerBox from "./MutliChoiceAnswerBox";
import useQuestions from "@hooks/useQuestions";

interface QuestionBoxProps {
  questionCount: number;
}

const QuestionBox = ({
  answers,
  displayText,
  _id: order,
  type,
  questionCount,
}: Question & QuestionBoxProps) => {
  const { addTag, removeTag, tags } = useQuestions();

  const onRadioChange = (value: string) => {
    setCheckedValues([value]);
    // Remove all the tags in the answers
    answers.forEach((answer) => removeTag(answer._id));
    // Add the tag of the selected answer
    addTag(value);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "option",
    defaultValue: "",
    // eslint-disable-next-line no-console
    onChange: onRadioChange,
  });

  const group = getRootProps();

  // Local state for the slider value changes
  const [sliderValue, setSliderValue] = useState(1);
  // Local state for the checkbox value changes
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  // Handle the slider value change
  const onSliderChange = (value: number) => {
    setSliderValue(value);
    // Remove all the tags in the answers
    answers.forEach((answer) => removeTag(answer._id));
    // Add the tag of the selected answer
    addTag(answers[value]._id);
  };

  // Handle the checkbox value change
  const onCheckboxChange = (value: string, checked: boolean) => {
    if (checked) {
      setCheckedValues([...checkedValues, value]);
      addTag(value);
    } else {
      setCheckedValues(checkedValues.filter((v) => v !== value));
      removeTag(value);
    }
  };

  return (
    <SlideFade in>
      <Box>
        <VStack mb={12} textAlign="center">
          <Text color="gray.500">
            Question {order}/{questionCount}
          </Text>
          <Heading size="lg">{displayText}</Heading>
        </VStack>

        {/* Render the Slider answer option if the question type is "slider" */}
        {type === "slider" && (
          <Slider
            size="lg"
            min={0}
            max={answers.length - 1} // Take away one because the index starts at 0
            colorScheme="brand"
            value={sliderValue}
            onChange={(v) => onSliderChange(v)}
          >
            {answers.map((answer, i) => (
              <SliderMark key={i} value={i} mt={3} ml={-2.5} minWidth="150px">
                {answer.displayText}
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

        {/* Render the single answers based on the question type */}
        <SimpleGrid {...group} spacing={4} columns={2}>
          {type === "single_choice" &&
            answers?.map((answer) => {
              const radio = getRadioProps({ value: answer._id });
              return (
                <AnswerBox
                  image={answer.photoURL || undefined}
                  value={answer._id}
                  key={answer._id}
                  {...radio}
                >
                  {answer.displayText}
                </AnswerBox>
              );
            })}
        </SimpleGrid>

        {/* Render the multiple choice answers based on the question type */}
        <SimpleGrid {...group} spacing={4} columns={2}>
          {type === "multiple_choice" &&
            answers?.map((answer) => {
              return (
                <MultiChoiceAnswerBox
                  image={answer.photoURL || undefined}
                  value={answer._id}
                  key={answer._id}
                  isChecked={checkedValues.includes(answer._id)}
                  onChange={(e) =>
                    onCheckboxChange(e.target.value, e.target.checked)
                  }
                >
                  {answer.displayText}
                </MultiChoiceAnswerBox>
              );
            })}
        </SimpleGrid>
      </Box>
    </SlideFade>
  );
};

export default QuestionBox;
