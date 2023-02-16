export type Result = {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  answers: Array<{
    _id: string;
    displayText: string;
    position: number;
    __v: number;
  }>;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
