import { Box, Button, Flex, Spinner } from "@chakra-ui/react";
import useQuestions from "../hooks/useQuestions";
import QuestionBox from "../components/question/QuestionBox";
import { useNavigate, useParams } from "react-router-dom";
import api from "@api/index";
import useCurrentUser from "@hooks/useCurrentUser";
import useOnlineStatus from "@hooks/useOnlineStatus";

const Question = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Loads all the questions from the API.
  const { questions, isLoading, tags, setPhoneRec, phone, clearCache } =
    useQuestions();
  const { currentUser } = useCurrentUser();
  const isOnline = useOnlineStatus();

  // Find the question by the id in the url.
  const question = questions?.find((question) => question._id === Number(id));

  // The final question id is the length of the questions array.
  const finalQuestionId = questions?.length;

  // Check if the question is the last one.
  const isFinalQuestion = question?._id === finalQuestionId;

  // Handle the next question transition.
  const onNextQuestion = () => {
    if (!question) return;

    // If the question is the last one, navigate to the conclusion page
    if (question?._id === finalQuestionId) {
      navigate("/question/conclude");
    } else {
      // otherwise, navigate to the next question.
      navigate(`/question/${question._id + 1}`);
    }
  };

  const onSubmitAnswers = async () => {
    if (!currentUser) return navigate("/login");

    const res = await api.post("/results/submit", {
      answers: tags,
      user: currentUser.id,
    });

    if (res.status === 200) {
      // Clear the cache so that the questions are reloaded.
      clearCache();
      // Set the phone recommendation.
      setPhoneRec(res.data);
      // Navigate to the results page.
      navigate("/results");
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
        {isFinalQuestion ? (
          <Button isDisabled={!isOnline} onClick={onSubmitAnswers}>
            {isOnline ? "Submit answers" : "You need to be online to submit"}
          </Button>
        ) : (
          <Button variant="outline" onClick={onNextQuestion}>
            Next question
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default Question;
