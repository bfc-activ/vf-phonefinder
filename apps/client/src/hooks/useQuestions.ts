import { useState, useEffect } from "react";
import api from "../api";
import { Questions } from "../types/Questions";

const useQuestions = () => {
  const [questions, setQuestions] = useState<Questions | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuestions = () => {
      api
        .get("/questions/")
        .then(({ data }) => setQuestions(data.data))
        .catch(({ response }) => setError(response.data.message))
        .finally(() => setLoading(false));
    };

    fetchQuestions();
  }, []);

  return { questions, isLoading, error };
};

export default useQuestions;
