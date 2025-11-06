import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
import { CharacterInfo } from "../components/CharacterInfo";

export const HomePage = () => {
  const { count, increment, decrement } = useCounter(1);
  const { data, loading } = useFetch(
    `https://rickandmortyapi.com/api/character/${count}`,
  );

  return (
    <div className="pt-24 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Personajes de Rick & Morty
      </h1>

      {loading ? <Loading /> : <CharacterInfo character={data} />}

      <div className="space-x-3">
        <button
          onClick={decrement}
          className="mt-8 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Anterior personaje
        </button>
        <button
          onClick={increment}
          className="mt-8 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Siguiente personaje
        </button>
      </div>
    </div>
  );
};
