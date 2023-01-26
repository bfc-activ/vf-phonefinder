import { Box, Button, Flex, Spinner } from "@chakra-ui/react";
import useQuestions from "../hooks/useQuestions";
import QuestionBox from "../components/question/QuestionBox";
import { useNavigate, useParams } from "react-router-dom";

const Question = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Loads all the questions from the API.
  const { questions, isLoading } = useQuestions();

  // Find the question by the id in the url.
  const question = questions?.find((question) => question.order === Number(id));

  // The final question id is the length of the questions array.
  const finalQuestionId = questions?.length;

  // Handle the next question transition.
  const onNextQuestion = () => {
    if (!question) return;

    // If the question is the last one, navigate to the conclusion page
    if (question?.order === finalQuestionId) {
      navigate("/question/conclude");
    } else {
      // otherwise, navigate to the next question.
      navigate(`/question/${question.order + 1}`);
    }
  };

  return (
    <Box>
      <Flex pt={24} align="center" justify="center">
        {isLoading && <Spinner />}
        {questions && question && (
          <QuestionBox questionCount={questions.length} {...question} />
        )}
      </Flex>

      <Flex mt={24} mb={24} justify="center">
        <Button onClick={onNextQuestion}>Next question</Button>
      </Flex>
    </Box>
  );
};

export default Question;
