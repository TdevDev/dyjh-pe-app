function QuizChoices({ question, dispatch, answer }) {
  const colors = ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-red-500"];

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 p-4">
      {question.answerChoices.map((choice, index) => (
        <button
          key={index}
          className={`transform transition-transform hover:scale-105 font-semibold p-4 rounded-lg ${
            colors[index % colors.length]
          }`}
          disabled={answer !== null}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
}

export default QuizChoices;
