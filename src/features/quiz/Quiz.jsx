import { useEffect } from "react";
import { useParams } from "react-router-dom";
import quizData from "../../data/quizData";
import QuizStartScreen from "./QuizStartScreen";
import QuizQuestion from "./QuizQuestion";
import QuizProgress from "./QuizProgress";
import QuizFinishScreen from "./QuizFinishScreen";
import { useQuizData } from "../../contexts/QuizDataContext";

function Quiz() {
  const { grade, unit } = useParams();
  const { quizState, dispatch } = useQuizData();
  const { status } = quizState;

  useEffect(
    function () {
      async function loadData() {
        try {
          const data = quizData.find(
            (data) => data.grade === grade && data.unit === unit
          ).questions;
          await new Promise((resolve) => setTimeout(resolve, 1000));
          dispatch({ type: "DATA_RECEIVED", payload: data });
        } catch (error) {
          dispatch({ type: "DATA_FAILED" });
        }
      }
      loadData();
    },
    [grade, unit, dispatch]
  );

  const currentSport = quizData.find(
    (quiz) => quiz.unit === unit && quiz.grade === grade
  ).sport;

  return (
    <div className="text-center">
      {status === "loading" && <p>data is loading</p>}
      {status === "error" && <p>there was an error loading the data</p>}
      {status === "ready" && <QuizStartScreen />}
      {status === "active" && (
        <>
          <QuizProgress sport={currentSport} />
          <QuizQuestion />
        </>
      )}
      {status === "finished" && <QuizFinishScreen />}
    </div>
  );
}

export default Quiz;
