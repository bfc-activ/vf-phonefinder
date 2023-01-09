import { useState, useEffect } from "react";
import api from "../api";
import { Question } from "../types/Question";

const useQuestion = (questionId: string | undefined) => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!questionId) return;

    const fetchQuestion = () => {
      api
        .get(`/questions/${questionId}`)
        .then(({ data }) => setQuestion(data.data))
        .catch(({ response }) => setError(response.data.message))
        .finally(() => setLoading(false));
    };

    fetchQuestion();
  }, [questionId]);

  return { question, isLoading, error };
};

export default useQuestion;
