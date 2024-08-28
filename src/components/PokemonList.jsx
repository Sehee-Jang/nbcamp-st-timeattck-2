import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList, addPokemon }) => {
  return (
    <div>
      <h2>Pokemon List</h2>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          addPokemon={addPokemon}
          isSelected={false}
        />
      ))}
    </div>
  );
};

export default PokemonList;
