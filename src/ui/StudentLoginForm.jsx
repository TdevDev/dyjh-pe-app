import { initializeApp } from "firebase/app";
import {
  getFirestore,
  updateDoc,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore/lite";

import { useNavigate } from "react-router-dom";
import { useStudentData } from "../contexts/StudentDataContext";
import Button from "./Button";
import ClassStep from "./ClassStep";
import GradeStep from "./GradeStep";
import StudentStep from "./StudentStep";

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

function StudentLoginForm() {
  const navigate = useNavigate();
  const { studentData, dispatch } = useStudentData();
  const { step, grade, classNumber, studentNumber } = studentData;

  async function handleAuthentication() {
    if (grade && classNumber && studentNumber) {
      const formattedClassNumber = classNumber.toString().padStart(2, "0");
      const formattedStudentNumber = studentNumber.toString().padStart(2, "0");

      const userId = `${grade}-${formattedClassNumber}-${formattedStudentNumber}`;
      const userRef = doc(db, "users", userId);

      try {
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
          await updateDoc(userRef, {});
          console.log("Document updated with ID", userId);
        } else {
          await setDoc(userRef, {
            grade,
            classNumber,
            studentNumber,
            completion: [],
          });
          console.log("New document created with ID", userId);
        }
        // const data = { grade, classNumber, studentNumber };
        const unitPath = `/grade/${grade}/unit`;
        // navigate(unitPath, { state: data });
        navigate(unitPath);
        dispatch({ type: "AUTHENTICATE" });
      } catch (error) {
        console.error("Error adding/updating document", error);
      }
    } else {
      console.error("Please fill in all fields");
    }
  }

  return (
    <div>
      {step >= 1 && <GradeStep grade={grade} dispatch={dispatch} />}
      {step >= 2 && <ClassStep classNumber={classNumber} dispatch={dispatch} />}
      {step >= 3 && (
        <StudentStep studentNumber={studentNumber} dispatch={dispatch} />
      )}
      {step >= 4 && (
        <div className="text-center mt-4">
          <Button type="primary" onClick={handleAuthentication}>
            Study
          </Button>
        </div>
      )}
    </div>
  );
}

export default StudentLoginForm;
