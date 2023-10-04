import { createContext, useContext, useReducer } from "react";

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
    case "DATA_RECEIVED":
      return { ...state, questions: action.payload, status: "ready" };
    case "DATA_FAILED":
      return { ...state, status: "error" };
    case "START":
      return { ...state, status: "active" };
    case "NEW_ANSWER": {
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
    case "NEXT_QUESTION": {
      const isPassed = (state.points / (state.index + 1)) * 100 >= 50;
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        passed: isPassed,
      };
    }
    case "FINISHED":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "TRY_AGAIN":
      return { ...state, status: "ready", index: 0, answer: null, points: 0 };
    case "RESTART":
      return { ...initialState };
    default:
      throw new Error("Action unknown");
  }
}

const QuizDataContext = createContext();

function QuizDataProvider({ children }) {
  const [quizState, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizDataContext.Provider value={{ quizState, dispatch }}>
      {children}
    </QuizDataContext.Provider>
  );
}

function useQuizData() {
  const context = useContext(QuizDataContext);
  if (context === undefined)
    throw new Error("QuizDataContext was used outside of the QuizDataProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { QuizDataProvider, useQuizData };
