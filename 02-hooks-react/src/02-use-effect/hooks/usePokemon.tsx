import { useEffect, useState } from "react";
interface Pokemon {
  name: string;
  id: number;
  img: string;
}

type Props = {
  id: number;
};

export const usePokemon = ({ id }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const searchPokemon = async (id: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    setPokemon({
      name: data.name,
      id: data.id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    });
  };

  useEffect(() => {
    searchPokemon(id);
  }, [id]);

  return { pokemon };
};
