import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";

import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import ClassStep from "./ClassStep";
import GradeStep from "./GradeStep";
import StudentStep from "./StudentStep";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyC-NJ53UzlU3K1SP1cR6TGAaJB-jzX6JV0",
//   authDomain: "dyjh-pe.firebaseapp.com",
//   projectId: "dyjh-pe",
//   storageBucket: "dyjh-pe.appspot.com",
//   messagingSenderId: "193004729107",
//   appId: "1:193004729107:web:03da135ecd2dd43272e0e6",
//   measurementId: "G-741XPQGG1K",
// };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const initialState = {
  step: 1,
  grade: "",
  classNumber: "",
  studentNumber: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_GRADE":
      return { ...state, grade: action.payload, step: (state.step = 2) };
    case "SET_CLASS_NUMBER":
      return { ...state, classNumber: action.payload, step: (state.step = 3) };
    case "SET_STUDENT_NUMBER":
      return {
        ...state,
        studentNumber: action.payload,
        state: (state.step = 4),
      };
    default:
      return state;
  }
}

function StudentLoginForm() {
  const navigate = useNavigate();

  const [{ step, grade, classNumber, studentNumber }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function handleAuthentication() {
    if (grade && classNumber && studentNumber) {
      // Check if a document with the same data already exists
      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("grade", "==", grade),
          where("classNumber", "==", classNumber),
          where("studentNumber", "==", studentNumber)
        )
      );

      if (!querySnapshot.empty) {
        // Document with the same data exists, update it
        const existingDoc = querySnapshot.docs[0];
        await updateDoc(existingDoc.ref, {
          // Update any other fields you want to change here
        });
        console.log("Document updated with ID", existingDoc.id);
      } else {
        // Document with the same data doesn't exist, create a new one
        try {
          const userRef = await addDoc(collection(db, "users"), {
            grade: grade,
            classNumber: classNumber,
            studentNumber: studentNumber,
          });
          console.log("New document created with ID", userRef.id);
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      }

      const data = { grade, classNumber, studentNumber };
      const unitPath = `/grade/${grade}/unit`;
      navigate(unitPath, { state: data });
    } else {
      console.error("Please fill in all fields");
    }
  }

  //   async function handleAuthentication() {
  //     if (grade && classNumber && studentNumber) {
  //       const isAuthenticated = true;

  //       if (isAuthenticated) {
  //         try {
  //           const userRef = await addDoc(collection(db, "users"), {
  //             grade: grade,
  //             classNumber: classNumber,
  //             studentNumber: studentNumber,
  //           });
  //           console.log("Document written with ID", userRef.id);

  //           const unitPath = `/grade/${grade}/unit`;
  //           navigate(unitPath);
  //         } catch (error) {
  //           console.error("Error adding document: ", error);
  //         }
  //       } else {
  //         console.error("There was an authentication error.");
  //       }
  //     } else {
  //       console.error("Please fill in all fields");
  //     }
  //   }

  return (
    <div>
      {step >= 1 && <GradeStep grade={grade} dispatch={dispatch} />}
      {step >= 2 && <ClassStep classNumber={classNumber} dispatch={dispatch} />}
      {step >= 3 && (
        <StudentStep studentNumber={studentNumber} dispatch={dispatch} />
      )}
      {step >= 4 && (
        <Button type="primary" onClick={handleAuthentication}>
          Study
        </Button>
      )}
    </div>
  );
}

export default StudentLoginForm;
