import React from "react";
import { useNavigate } from "react-router-dom";

function PokemonCard({ pokemon, addPokemon, removePokemon, isSelected }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          navigate("/details");
        }}
      >
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <p>{pokemon.korean_name}</p>
        <p>{pokemon.id}</p>
      </div>

      {isSelected ? (
        <button
          onClick={() => {
            removePokemon(pokemon);
          }}
        >
          삭제
        </button>
      ) : (
        <button
          onClick={() => {
            addPokemon(pokemon);
          }}
        >
          추가
        </button>
      )}
    </div>
  );
}

export default PokemonCard;
