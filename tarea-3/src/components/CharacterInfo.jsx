import "./CharacterInfo.css";

const CharacterInfo = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name} </h2>
      <p>
        <strong>Estado: </strong> {character.status}
      </p>
      <p>
        <strong>Especie: </strong> {character.species}
      </p>
      <p>
        <strong>Origen: </strong> {character.origin?.name}
      </p>
    </div>
  );
};

export default CharacterInfo;
