export const CharacterInfo = ({ character }) => {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 w-80 mx-auto text-center border border-gray-200">
      <img
        src={character.image}
        alt={character.name}
        className="rounded-xl w-48 h-48 object-cover mx-auto mb-4 shadow-md"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {character.name}
      </h2>
      <p className="text-gray-600">
        <strong className="font-medium text-gray-700">Estado:</strong>{" "}
        {character.status}
      </p>
      <p className="text-gray-600">
        <strong className="font-medium text-gray-700">Especie:</strong>{" "}
        {character.species}
      </p>
      <p className="text-gray-600">
        <strong className="font-medium text-gray-700">Origen:</strong>{" "}
        {character.origin?.name}
      </p>
    </div>
  );
};
