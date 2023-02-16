export type Question = {
  _id: number;
  displayText: string;
  type: "single_choice" | "slider" | "multiple_choice";
  answers: Array<{
    _id: string;
    displayText: string;
    photoURL?: string;
    position: number;
  }>;
};

export type Questions = Array<Question>;
