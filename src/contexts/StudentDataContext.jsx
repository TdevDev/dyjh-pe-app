import { useReducer, useContext, createContext } from "react";

const initialState = {
  step: 1,
  grade: "",
  classNumber: "",
  studentNumber: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_GRADE":
      return { ...state, grade: action.payload, step: 2 };
    case "SET_CLASS_NUMBER":
      return {
        ...state,
        classNumber: action.payload,
        step: 3,
      };
    case "SET_STUDENT_NUMBER":
      return {
        ...state,
        studentNumber: action.payload,
        step: 4,
      };
    case "AUTHENTICATE":
      return { ...state, step: 5 };
    case "RESET_DATA":
      return initialState;
    default:
      return state;
  }
}
const StudentDataContext = createContext();

function StudentDataProvider({ children }) {
  const [studentData, dispatch] = useReducer(reducer, initialState);

  return (
    <StudentDataContext.Provider value={{ studentData, dispatch }}>
      {children}
    </StudentDataContext.Provider>
  );
}

function useStudentData() {
  const context = useContext(StudentDataContext);
  if (context === undefined)
    throw new Error(
      "StudentDataContext was used outside of the StudentDataProvider"
    );
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { StudentDataProvider, useStudentData };
