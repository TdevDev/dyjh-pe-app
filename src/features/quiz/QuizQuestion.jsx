import QuizChoices from "./QuizChoices";

function QuizQuestion({ question, dispatch, answer }) {
  return (
    <div className="bg-white rounded-lg border border-stone-300 shadow-md p-4 m-6">
      <div className="flex items-center flex-col justify-center">
        <p className="text-center">{question.chineseTerm}</p>
        <img
          className="h-64 w-64 object-scale-down"
          src={question.imageUrl}
          alt={question.chineseTerm}
        />
      </div>
      <QuizChoices question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default QuizQuestion;
