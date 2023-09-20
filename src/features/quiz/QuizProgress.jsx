function QuizProgress({ index, numQuestions, points }) {
  return (
    <header>
      <p>
        Questions <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        Score: <strong>{points}</strong> / {numQuestions}
      </p>
    </header>
  );
}

export default QuizProgress;
