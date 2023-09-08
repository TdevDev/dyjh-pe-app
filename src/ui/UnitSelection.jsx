import { useLocation, useParams } from "react-router-dom";
import vocabularyData from "../data/vocabularyData";
import Button from "./Button";

function UnitSelection() {
  //   const location = useLocation();

  const { grade } = useParams();

  return (
    <div>
      <h2 className="mb-2">Select unit:</h2>
      <ul>
        {vocabularyData
          .filter((data) => data.grade === grade)
          .map((data) => (
            <li key={data.unit}>
              <Button
                type="secondary"
                to={`/grade/${grade}/unit/${data.unit}/vocab`}
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
