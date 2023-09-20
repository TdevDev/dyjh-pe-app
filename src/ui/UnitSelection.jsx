import { useParams } from "react-router-dom";
import { useStudentData } from "../contexts/StudentDataContext";
import vocabularyData from "../data/vocabularyData";
import Button from "./Button";

function UnitSelection() {
  // const location = useLocation();
  // const { grade: gradeNum, classNumber, studentNumber } = location.state;
  const { grade, classNumber, studentNumber } = useStudentData().studentData;
  console.log(grade, classNumber, studentNumber);

  const { grade: gradeParam } = useParams();
  console.log(gradeParam);

  return (
    <div className="text-center">
      <h2 className="mb-2">Select unit:</h2>
      <ul>
        {vocabularyData
          .filter((data) => data.grade === gradeParam)
          .map((data) => (
            <li key={data.unit}>
              <Button
                type="secondary"
                to={`/grade/${gradeParam}/unit/${data.unit}/vocab`}
              >
                {data.sport}
              </Button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default UnitSelection;
