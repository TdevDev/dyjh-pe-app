function QuizProgress({ index, numQuestions, points }) {
  return (
    <header>
      <p>
        Questions <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / 10
      </p>
    </header>
  );
}

export default QuizProgress;
