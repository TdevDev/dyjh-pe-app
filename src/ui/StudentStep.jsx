function StudentStep({ studentNumber, dispatch }) {
  function handleStudentNumberChange(event) {
    dispatch({
      type: "SET_STUDENT_NUMBER",
      payload: event.target.value.toString(),
    });
  }

  return (
    <div className="text-center mt-6">
      <label htmlFor="studentNumber">Enter your student number:</label>
      <br />
      <input
        type="number"
        id="studentNumber"
        value={studentNumber}
        onChange={handleStudentNumberChange}
        placeholder="Student Number"
        min="1"
        max="35"
        className="mt-1 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      />
    </div>
  );
}

export default StudentStep;
