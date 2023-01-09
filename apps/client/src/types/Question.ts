export type Question = {
  questionId: string;
  displayName: string;
  options: Array<{
    title: string;
    value: string;
    image: string;
  }>;
};
