import { useNavigate } from "react-router-dom";
import { useStudentData } from "../contexts/StudentDataContext";

function LogoutButton({ type }) {
  const { dispatch: studentDataDispatch } = useStudentData();
  const navigate = useNavigate();

  function handleLogout() {
    studentDataDispatch({ type: "RESET_DATA" });
    navigate("/");
  }

  const styles = {
    nav: "text-stone-100",
    primary:
      "bg-blue-900 py-2.5 px-3 inline-block uppercase rounded-full font-semibold text-stone-100 hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 mb-4",
  };

  return (
    <button className={styles[type]} onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
