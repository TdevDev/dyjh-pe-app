import Button from "../../ui/Button";

function QuizFinishScreen({ points, dispatch }) {
  return (
    <div className="flex flex-col mx-2 gap-2">
      <span>
        You scored <strong>{points}</strong> / 10!
      </span>
      <span>Thank you for finishing your homework!</span>
      <div className="mx-auto">
        <Button to="/" type="primary">
          Home
        </Button>
        <Button type="primary" onClick={() => dispatch({ type: "restart" })}>
          Try again
        </Button>
      </div>
    </div>
  );
}

export default QuizFinishScreen;
