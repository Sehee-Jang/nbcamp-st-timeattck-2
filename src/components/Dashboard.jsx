import React from "react";
import PokemonCard from "./PokemonCard";

const Dashboard = ({ selectedPokemon, removePokemon }) => {
  return (
    <div>
      <h2>대시보드</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <ul>
          {selectedPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              removePokemon={removePokemon}
              isSelected={true}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
