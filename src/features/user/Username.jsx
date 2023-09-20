import { useStudentData } from "../../contexts/StudentDataContext";

function Username() {
  const { studentData } = useStudentData();

  if (
    !studentData ||
    !studentData.grade ||
    !studentData.classNumber ||
    !studentData.studentNumber
  )
    return null;

  const { studentNumber, classNumber, grade } = studentData;
  const formattedClassNumber = classNumber.toString().padStart(2, "0");
  const formattedStudentNumber = studentNumber.toString().padStart(2, "0");

  return (
    <div className="text-white  text-sm font-semibold uppercase md:block">
      {studentData
        ? `${grade}${formattedClassNumber} - ${formattedStudentNumber}`
        : ""}
    </div>
  );
}

export default Username;
