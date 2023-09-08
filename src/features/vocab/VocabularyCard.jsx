function VocabularyCard({ item }) {
  const { term, meaning, imageUrl } = item;
  return (
    <div className="max-w-xs mb-4 rounded shadow-lg overflow-hidden border border-stone-100 p-2">
      <div className="w-full h-48 overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt={term}
          className="w-full h-full object-scale-down"
        />
      </div>
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2">{term}</h3>
        <p className="text-sm text-gray-600">{meaning}</p>
      </div>
    </div>
  );
}

export default VocabularyCard;
