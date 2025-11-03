import CharacterInfo from "./components/CharacterInfo";
import Loading from "./components/Loading";
import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { count, increment, decrement } = useCounter(1);
  const { data, loading, error } = useFetch(
    `https://rickandmortyapi.com/api/character/${count}`,
  );

  return (
    <main className="container">
      <h1>Personajes de Rick & Morty</h1>

      {loading && <Loading />}

      {error && <p>{error}</p>}

      {data && !loading && <CharacterInfo character={data} />}

      <div>
        <button onClick={decrement}>Anterior</button>

        <button onClick={increment}>Siguiente</button>
      </div>
    </main>
  );
}

export default App;
