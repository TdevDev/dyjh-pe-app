import { useQuizData } from "../../contexts/QuizDataContext";
import QuizChoices from "./QuizChoices";

function QuizQuestion() {
  const { questions, index } = useQuizData().quizState;
  return (
    <div className="bg-white rounded-lg border border-stone-300 shadow-md p-4 m-6">
      <div className="flex items-center flex-col justify-center">
        <p className="text-center text-lg">{questions[index].chineseTerm}</p>
        <img
          className="h-64 w-64 object-scale-down"
          src={questions[index].imageUrl}
          alt={questions[index].chineseTerm}
        />
      </div>
      <QuizChoices />
    </div>
  );
}

export default QuizQuestion;
