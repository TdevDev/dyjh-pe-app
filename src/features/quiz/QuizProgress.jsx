import { useQuizData } from "../../contexts/QuizDataContext";

function QuizProgress({ sport }) {
  const { points } = useQuizData().quizState;

  return (
    <header>
      <p>{sport}</p>
      <p>
        Score: <strong>{points}</strong>
      </p>
    </header>
  );
}

export default QuizProgress;
