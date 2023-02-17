import { Phone } from "@interfaces/Phone";
import { useState, useEffect } from "react";
import api from "../api";
import { Questions } from "../types/Questions";

const useQuestions = () => {
  const [questions, setQuestions] = useState<Questions | null>(null);
  const [phone, setPhone] = useState<Phone | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  console.log("tags", tags);

  // Clears the localStorage
  const clearCache = () => {
    localStorage.clear();
  };

  // Sets the phone rec in state and in localStorage
  const setPhoneRec = (phone: Phone) => {
    setPhone(phone);
    // Set the phone in localStorage
    localStorage.setItem("phone", JSON.stringify(phone));
  };

  // Adds a tag to the array of tags and to localStorage
  const addTag = (tag: string) => {
    setTags([...tags, tag]);
    // Add it to a localStorage field called "tags"
    localStorage.setItem("tags", JSON.stringify([...tags, tag]));
  };

  // Removes a tag from the array of tags and from localStorage
  const removeTag = (tag: string) => {
    // Remove the tag from the array
    const index = tags.indexOf(tag);
    if (index > -1) {
      tags.splice(index, 1);
    }
    setTags([...tags]);

    // Remove it from localStorage
    localStorage.setItem("tags", JSON.stringify([...tags]));
  };

  // Get the tags & phone from localStorage on component mount
  useEffect(() => {
    const tags = localStorage.getItem("tags");
    const phone = localStorage.getItem("phone");
    if (tags) {
      setTags(JSON.parse(tags));
    }

    if (phone) {
      setPhone(JSON.parse(phone));
    }
  }, []);

  // Get all questions from the API on component mount
  useEffect(() => {
    const fetchQuestions = () => {
      api
        .get("/questions/")
        .then(({ data }) => setQuestions(data))
        .catch(({ response }) => setError(response.data.message))
        .finally(() => setLoading(false));
    };

    fetchQuestions();
  }, []);

  return {
    questions,
    isLoading,
    error,
    addTag,
    removeTag,
    tags,
    phone,
    setPhoneRec,
    clearCache,
  };
};

export default useQuestions;
