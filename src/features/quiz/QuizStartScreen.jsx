import Button from "../../ui/Button";

function QuizStartScreen({ questions, dispatch }) {
  return (
    <div className="text-center mt-2">
      <h2 className="mb-2">{questions.sport} Quiz</h2>
      <Button type="primary" onClick={() => dispatch({ type: "start" })}>
        Begin
      </Button>
    </div>
  );
}

export default QuizStartScreen;
