function ClassStep({ classNumber, dispatch }) {
  function handleClassChange(event) {
    dispatch({
      type: "SET_CLASS_NUMBER",
      payload: event.target.value.toString(),
    });
  }

  return (
    <div className="text-center mt-4">
      <label htmlFor="classStep">Select your class number:</label>
      <br />
      <select
        className="mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white"
        id="classStep"
        value={classNumber}
        onChange={handleClassChange}
      >
        <option value="">Select your class:</option>
        {Array.from({ length: 15 }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ClassStep;
