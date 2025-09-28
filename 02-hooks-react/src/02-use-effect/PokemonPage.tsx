import { useCounter } from "./hooks/useCounter";
import { usePokemon } from "./hooks/usePokemon";

export const PokemonPage = () => {
  const { count, increment, decrement } = useCounter({
    initialValue: 1,
  });

  const { pokemon } = usePokemon({ id: count });

  if (!pokemon) {
    return <div className="text-white">Pokemon no encontrado </div>;
  }

  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">
        #{pokemon?.id} {pokemon?.name}
      </h3>
      <img src={pokemon?.img} alt={pokemon?.name} />

      <div className="flex gap-2">
        <button
          onClick={decrement}
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Anterior
        </button>

        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
