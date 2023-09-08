import { useParams } from "react-router-dom";
import vocabularyData from "../../data/vocabularyData";
import VocabularyCard from "./VocabularyCard";
import Button from "../../ui/Button";

function VocabularyList() {
  const { grade, unit } = useParams();
  const selectedData = vocabularyData.find(
    (data) => data.grade === grade && data.unit === unit
  );

  if (!selectedData)
    return <div>Data not found for the selected grade and unit</div>;

  const { sport, terms } = selectedData;

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-center">{sport}</h2>
      <p className="underline mb-2">Unit: {unit}</p>
      <Button type="primary" to={`/grade/${grade}/unit/${unit}/quiz`}>
        Quiz
      </Button>
      <div className="p-4 grid gap-4 md:grid-cols-3">
        {terms.map((item, index) => (
          <VocabularyCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default VocabularyList;
