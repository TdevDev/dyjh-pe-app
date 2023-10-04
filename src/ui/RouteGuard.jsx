import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStudentData } from "../contexts/StudentDataContext";

function RouteGuard({ children }) {
  const { studentData } = useStudentData();
  const { grade, classNumber, studentNumber } = studentData;
  const navigate = useNavigate();

  const isAuthenticated = grade && classNumber && studentNumber;
  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}

export default RouteGuard;
