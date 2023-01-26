export type Question = {
  order: number;
  title: string;
  type: "single_choice" | "slider" | "multiple_choice";
  answers: Array<{
    displayName: string;
    photoURL?: string;
    tagId: string;
  }>;
};

export type Questions = Array<Question>;
