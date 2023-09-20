import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import VocabularyList from "./features/vocab/VocabularyList";
import Quiz from "./features/quiz/Quiz";
import Flashcards from "./features/flashcards/Flashcards";
import StudentLoginForm from "./ui/StudentLoginForm";
import UnitSelection from "./ui/UnitSelection";
import { StudentDataProvider } from "./contexts/StudentDataContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/login", element: <StudentLoginForm /> },
      {
        path: "/grade/:grade/unit",
        element: <UnitSelection />,
      },

      { path: "/grade/:grade/unit/:unit/vocab", element: <VocabularyList /> },
      { path: "/grade/:grade/unit/:unit/flashcards", element: <Flashcards /> },
      { path: "/grade/:grade/unit/:unit/quiz", element: <Quiz /> },
    ],
  },
]);

function App() {
  return (
    <StudentDataProvider>
      <RouterProvider router={router} />;
    </StudentDataProvider>
  );
}

export default App;
