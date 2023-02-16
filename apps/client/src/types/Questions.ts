export type Question = {
  _id: string;
  displayText: string;
  type: "single_choice" | "slider" | "multiple_choice";
  answers: Array<{
    displayText: string;
    photoURL?: string;
    position: number;
  }>;
};

export type Questions = Array<Question>;
