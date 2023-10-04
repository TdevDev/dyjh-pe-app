import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StudentDataProvider } from "./contexts/StudentDataContext";
import { QuizDataProvider } from "./contexts/QuizDataContext";
import { lazy, Suspense } from "react";

import AppLayout from "./ui/AppLayout";

const Home = lazy(() => import("./ui/Home"));
const VocabularyList = lazy(() => import("./features/vocab/VocabularyList"));
const Quiz = lazy(() => import("./features/quiz/Quiz"));
const Flashcards = lazy(() => import("./features/flashcards/Flashcards"));
const StudentLoginForm = lazy(() => import("./ui/StudentLoginForm"));
const UnitSelection = lazy(() => import("./ui/UnitSelection"));
const RouteGuard = lazy(() => import("./ui/RouteGuard"));

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
        element: (
          <RouteGuard>
            <UnitSelection />,
          </RouteGuard>
        ),
      },

      {
        path: "/grade/:grade/unit/:unit/vocab",
        element: (
          <RouteGuard>
            <VocabularyList />
          </RouteGuard>
        ),
      },
      {
        path: "/grade/:grade/unit/:unit/flashcards",
        element: (
          <RouteGuard>
            <Flashcards />
          </RouteGuard>
        ),
      },
      {
        path: "/grade/:grade/unit/:unit/quiz",
        element: (
          <RouteGuard>
            <Quiz />
          </RouteGuard>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <StudentDataProvider>
      <QuizDataProvider>
        <ToastContainer />
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      </QuizDataProvider>
    </StudentDataProvider>
  );
}

export default App;
