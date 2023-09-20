import { Link } from "react-router-dom";
import { useStudentData } from "../contexts/StudentDataContext";
import Username from "../features/user/Username";
import LogoutButton from "./LogoutButton";

function Header() {
  const { classNumber, grade, studentNumber, step } =
    useStudentData().studentData;
  const toPath =
    classNumber && grade && studentNumber ? `/grade/${grade}/unit` : "/";

  return (
    <header className="bg-blue-950 px-4 py-3 border-b border-stone-200 flex justify-between">
      <Link to={toPath} className="text-stone-100 hover:text-stone-50">
        DYJH PE
      </Link>
      {step === 5 && <Username />}
      <LogoutButton type="nav" />
    </header>
  );
}

export default Header;
