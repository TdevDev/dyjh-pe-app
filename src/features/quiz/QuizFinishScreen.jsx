import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc, doc, getDoc } from "firebase/firestore/lite";
import { useCallback, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useQuizData } from "../../contexts/QuizDataContext";
import { useStudentData } from "../../contexts/StudentDataContext";
import Button from "../../ui/Button";
import LogoutButton from "../../ui/LogoutButton";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env
    .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function QuizFinishScreen() {
  const { unit, grade } = useParams();
  const { studentData } = useStudentData();
  const { dispatch: quizDataDispatch, quizState } = useQuizData();
  const { points, passed } = quizState;

  const handleMarkUnitCompleted = useCallback(async () => {
    if (passed) {
      const formattedClassNumber = studentData.classNumber
        .toString()
        .padStart(2, "0");
      const formattedStudentNumber = studentData.studentNumber
        .toString()
        .padStart(2, "0");

      const userId = `${studentData.grade}-${formattedClassNumber}-${formattedStudentNumber}`;
      const userRef = doc(db, "users", userId);

      try {
        const userSnapshot = await getDoc(userRef);

        if (userSnapshot.exists()) {
          const existingData = userSnapshot.data();
          const completionSet = new Set(existingData.completion);
          if (!completionSet.has(unit)) {
            completionSet.add(unit);

            const updatedData = {
              ...existingData,
              completion: Array.from(completionSet),
            };
            await updateDoc(userRef, updatedData);
          }
        }
      } catch (error) {
        console.error("Error marking unit as completed in Firestore", error);
      }
    }
  }, [passed, studentData, unit]);

  useEffect(() => {
    handleMarkUnitCompleted();
  }, [handleMarkUnitCompleted]);

  const unitPath = `/grade/${grade}/unit`;

  return (
    <div className="flex flex-col mx-2 gap-2">
      <span className="">
        You scored <strong>{points}</strong> / 9!
      </span>
      {passed && <span>Unit {unit} complete!</span>}
      <div className="max-h-screen">
        {passed && (
          <img
            className="w-full max-w-md mx-auto block"
            src="/assets/Tim_Cartoon_Passed.jpg"
            alt=""
          />
        )}
        {!passed && (
          <img
            className="w-full max-w-md mx-auto block"
            src="/assets/Tim_Cartoon_NotPassed.jpg"
            alt=""
          />
        )}
      </div>
      <div className="mx-auto mt-4 flex flex-col">
        {!passed && (
          <Button
            type="primary"
            onClick={() => quizDataDispatch({ type: "TRY_AGAIN" })}
          >
            Try again
          </Button>
        )}
        <Button
          to={unitPath}
          type="primary"
          onClick={() => {
            quizDataDispatch({ type: "RESTART" });
          }}
        >
          Study
        </Button>

        <LogoutButton type="primary" />
      </div>
    </div>
  );
}

export default QuizFinishScreen;
