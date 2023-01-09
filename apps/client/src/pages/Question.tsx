import { Flex, Spinner } from "@chakra-ui/react";
import useQuestion from "../hooks/useQuestion";
import QuestionBox from "../components/question/QuestionBox";

const Question = () => {
  const { question, isLoading } = useQuestion("1");

  return (
    <Flex pt={24} align="center" justify="center">
      {isLoading && <Spinner />}
      {question && <QuestionBox {...question} />}
    </Flex>
  );
};

export default Question;
