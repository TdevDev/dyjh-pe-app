import Button from "./Button";

function GradeStep({ dispatch }) {
  function handleGradeSelect(selectedGrade) {
    dispatch({ type: "SET_GRADE", payload: selectedGrade });
  }
  return (
    <div className="mt-4 text-center">
      <h2 className="text-md mb-2">Choose your grade:</h2>
      <div className="flex flex-row justify-center space-x-2">
        <Button type="primary" onClick={() => handleGradeSelect("7")}>
          Grade 7
        </Button>
        <Button type="primary" onClick={() => handleGradeSelect("8")}>
          Grade 8
        </Button>
        <Button type="primary" onClick={() => handleGradeSelect("9")}>
          Grade 9
        </Button>
      </div>
    </div>
  );
}

export default GradeStep;
