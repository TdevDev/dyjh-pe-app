import { useState } from "react";
import vocabularyData from "../data/vocabularyData";
import Button from "./Button";

function GradeSelection() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  // const unit = vocabularyData.find((data) => data.grade === "7th");
  // console.log(unit);

  function handleSelectedGrade(grade) {
    setSelectedGrade(grade);
  }

  return (
    <div className="mt-4 text-center">
      <h2 className="text-md mb-2">Choose your grade:</h2>
      <div className="flex flex-row justify-center space-x-2">
        <Button type="primary" onClick={() => handleSelectedGrade("7")}>
          Grade 7
        </Button>
        <Button type="primary" onClick={() => handleSelectedGrade("8")}>
          Grade 8
        </Button>
        <Button type="primary" onClick={() => handleSelectedGrade("9")}>
          Grade 9
        </Button>
      </div>

      {selectedGrade && (
        <div>
          <h2 className="mb-2">Select unit:</h2>
          <ul>
            {vocabularyData
              .filter((data) => data.grade === selectedGrade)
              .map((data) => (
                <li key={data.unit}>
                  <Button
                    type="secondary"
                    to={`/grade/${selectedGrade}/unit/${data.unit}/vocab`}
                  >
                    {data.sport}
                  </Button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GradeSelection;
