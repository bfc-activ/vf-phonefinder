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

  // If there is a tag that starts with "brand_", then they have answered the brand question.
  const hasAnsweredBrandQuestion = tags.some((tag) => tag.startsWith("brand_"));
  // If there is a tag that starts with "price_", then they have answered the price question.
  const hasAnsweredProductQuestion = tags.some((tag) =>
    tag.startsWith("price_")
  );
  // If there is a tag that starts with "usage_", then they have answered the usage question.
  const hasAnsweredUsageQuestion = tags.some((tag) => tag.startsWith("usage_"));
  // If there is a tag that starts with "camera_", then they have answered the camera question.
  const hasAnsweredCameraQuestion = tags.some((tag) =>
    tag.startsWith("camera_")
  );
  // If there is a tag that starts with "battery_", then they have answered the battery question.
  const hasAnsweredBatteryQuestion = tags.some((tag) =>
    tag.startsWith("battery_")
  );
  // If there is a tag that starts with "water_", then they have answered the water protection question.
  const hasAnsweredWaterQuestion = tags.some((tag) => tag.startsWith("water_"));
  // If there is a tag that starts with "size_", then they have answered the screen question.
  const hasAnsweredScreenQuestion = tags.some((tag) => tag.startsWith("size_"));
  // If there is a tag that starts with "5G_", then they have answered the 5G question.
  const hasAnswered5GQuestion = tags.some((tag) => tag.startsWith("5G_"));

  // If they have answered all the questions, then they can submit their answers.
  const canSubmitAnswers =
    hasAnsweredBrandQuestion &&
    hasAnsweredProductQuestion &&
    hasAnsweredUsageQuestion &&
    hasAnsweredCameraQuestion &&
    hasAnsweredBatteryQuestion &&
    hasAnsweredWaterQuestion &&
    hasAnswered5GQuestion;

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
          <Button
            isDisabled={!isOnline || !canSubmitAnswers}
            onClick={onSubmitAnswers}
          >
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
