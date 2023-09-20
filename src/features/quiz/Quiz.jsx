import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import quizData from "../../data/quizData";
import QuizStartScreen from "./QuizStartScreen";
import QuizQuestion from "./QuizQuestion";
import QuizProgress from "./QuizProgress";
import NextButton from "./NextButton";
import QuizFinishScreen from "./QuizFinishScreen";

const initialState = {
  questions: [],

  // "loading", "ready", "error", "active", "finished"
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  passed: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer": {
      const currentQuestion = state.questions[state.index];
      const correctAnswerIndex = currentQuestion.answerChoices.findIndex(
        (choice) => choice.isCorrect
      );
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === correctAnswerIndex
            ? state.points + 1
            : state.points,
      };
    }
    case "nextQuestion": {
      const isPassed = (state.points / (state.index + 1)) * 100 >= 50;
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        passed: isPassed,
      };
    }
    case "finished":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return { ...state, status: "ready", index: 0, answer: null, points: 0 };
    default:
      throw new Error("Action unknown");
  }
}

function Quiz() {
  const { grade, unit } = useParams();
  const [{ questions, status, index, answer, points, passed }, dispatch] =
    useReducer(reducer, initialState);

  const numQuestions = questions.length;

  useEffect(
    function () {
      async function loadData() {
        try {
          const data = quizData.find(
            (data) => data.grade === grade && data.unit === unit
          ).questions;
          await new Promise((resolve) => setTimeout(resolve, 1000));
          dispatch({ type: "dataReceived", payload: data });
        } catch (error) {
          dispatch({ type: "dataFailed" });
        }
      }
      loadData();
    },
    [grade, unit]
  );

  return (
    <div className="text-center">
      {status === "loading" && <p>data is loading</p>}
      {status === "error" && <p>there was an error loading the data</p>}
      {status === "ready" && (
        <QuizStartScreen questions={questions} dispatch={dispatch} />
      )}
      {status === "active" && (
        <>
          <QuizProgress
            index={index}
            numQuestions={numQuestions}
            points={points}
          />
          <QuizQuestion
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
          <NextButton
            dispatch={dispatch}
            answer={answer}
            numQuestions={numQuestions}
            index={index}
          />
        </>
      )}
      {status === "finished" && (
        <QuizFinishScreen dispatch={dispatch} points={points} passed={passed} />
      )}
    </div>
  );
}

export default Quiz;
