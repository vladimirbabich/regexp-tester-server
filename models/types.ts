export type QuestionData = {
  question: string;
  options: string;
  answers: string;
  difficulty: number;
};
export type QuizData = {
  title: string;
  questions: QuestionData[];
};
