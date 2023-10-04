import { useParams } from "react-router-dom";
import vocabularyData from "../data/vocabularyData";
import Button from "./Button";

function UnitSelection() {
  const { grade: gradeParam } = useParams();

  return (
    <div className="text-center">
      <h2 className="mb-2">Select unit:</h2>
      <ul>
        {vocabularyData
          .filter((data) => data.grade === gradeParam)
          .map((data) => (
            <li key={data.unit}>
              <Button
                type="primary"
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
