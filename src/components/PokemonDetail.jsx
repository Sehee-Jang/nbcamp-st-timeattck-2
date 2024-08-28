import React from "react";
import MOCK_DATA from "../mock";
import { useNavigate } from "react-router-dom";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const pokemonId = 1; // 포켓몬 ID 를 쿼리스트링으로부터 받아옵시다.
  const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(", ")}</p>

      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default PokemonDetail;
