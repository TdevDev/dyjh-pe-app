import { Link } from "react-router-dom";
import { useQuizData } from "../contexts/QuizDataContext";
import { useStudentData } from "../contexts/StudentDataContext";
import { AiOutlineHome } from "react-icons/ai";
import Username from "../features/user/Username";
import LogoutButton from "./LogoutButton";

function Header() {
  const { classNumber, grade, studentNumber, step } =
    useStudentData().studentData;
  const { dispatch: quizDataDispatch } = useQuizData();
  const toPath =
    classNumber && grade && studentNumber ? `/grade/${grade}/unit` : "/";

  return (
    <header className="bg-blue-950 px-4 py-3 border-b border-stone-200 relative">
      <div className="flex justify-between items-center">
        <Link
          to={toPath}
          className="z-20 text-xl text-stone-100 hover:text-stone-50"
          onClick={() => {
            quizDataDispatch({ type: "RESTART" });
          }}
        >
          <span>
            DYJH PE
            <AiOutlineHome className="inline mb-1 ml-2" />
          </span>
        </Link>
        <LogoutButton type="nav" />
        {step === 5 && (
          <div className="z-10 absolute inset-0 flex items-center justify-center">
            <Username />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
