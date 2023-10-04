import { useQuizData } from "../../contexts/QuizDataContext";
import Button from "../../ui/Button";

function QuizStartScreen() {
  const { dispatch: quizDataDispatch } = useQuizData();
  return (
    <div className="text-center mt-2">
      <h2 className="mb-2"> Homework</h2>
      <Button
        type="primary"
        onClick={() => quizDataDispatch({ type: "START" })}
      >
        Begin
      </Button>
    </div>
  );
}

export default QuizStartScreen;
