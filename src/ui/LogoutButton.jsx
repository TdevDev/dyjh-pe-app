import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useQuizData } from "../contexts/QuizDataContext";
import { useStudentData } from "../contexts/StudentDataContext";

function LogoutButton({ type }) {
  const { dispatch: studentDataDispatch } = useStudentData();
  const { dispatch: quizDataDispatch } = useQuizData();
  const navigate = useNavigate();

  function handleLogout() {
    studentDataDispatch({ type: "RESET_DATA" });
    quizDataDispatch({ type: "RESTART" });
    navigate("/");
  }

  const styles = {
    primary:
      "bg-blue-900 py-2.5 px-3 inline-block uppercase rounded-full font-semibold text-stone-100 hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 mb-4",
  };

  if (type === "nav")
    return (
      <button
        className="z-20 text-xl text-stone-100 hover:text-stone-50"
        onClick={handleLogout}
        alt="logout"
      >
        <BiLogOutCircle />
      </button>
    );

  return (
    <button className={styles[type]} onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
