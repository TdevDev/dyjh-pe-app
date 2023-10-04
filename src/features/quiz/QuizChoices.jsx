import { useEffect, useState } from "react";
import { useQuizData } from "../../contexts/QuizDataContext";

import { toast } from "react-toastify";

function QuizChoices() {
  const { quizState, dispatch: quizDataDispatch } = useQuizData();
  const { questions, answer, index } = quizState;

  const [timerRunning, setTimerRunning] = useState(false);

  function handleChoiceClick(choiceIndex) {
    if (answer === null && !timerRunning) {
      const correctAnswerIndex = questions[index].answerChoices.findIndex(
        (choice) => choice.isCorrect
      );
      const isCorrect = choiceIndex === correctAnswerIndex;

      if (isCorrect) {
        toast.success("Correct!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 400,
          style: {
            textAlign: "center",
          },
        });
      } else {
        toast.error("Wrong!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 400,
          style: {
            textAlign: "center",
          },
        });
      }

      quizDataDispatch({ type: "NEW_ANSWER", payload: choiceIndex });

      setTimerRunning(true);
    }
  }

  useEffect(() => {
    let timer;

    if (timerRunning) {
      timer = setTimeout(() => {
        if (index === questions.length - 1)
          return quizDataDispatch({ type: "FINISHED" });
        quizDataDispatch({ type: "NEXT_QUESTION" });
        setTimerRunning(false);
      }, 750);
    }
    return () => clearTimeout(timer);
  }, [timerRunning, quizDataDispatch, questions.length, index]);

  // const colors = ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-red-500"];
  const borderColors = [
    "border-blue-500",
    "border-green-500",
    "border-yellow-500",
    "border-red-500",
  ];

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 p-4">
      {questions[index].answerChoices.map((choice, index) => (
        <button
          key={index}
          className={`font-semibold p-4 rounded-lg border-4
          ${borderColors[index % borderColors.length]}
          ${
            answer !== null
              ? "cursor-not-allowed opacity-60"
              : "transform transition-transform hover:scale-105 hover:bg-opacity-80"
          }`}
          disabled={answer !== null}
          onClick={() => handleChoiceClick(index)}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
}

export default QuizChoices;
