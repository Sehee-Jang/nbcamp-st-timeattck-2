import React, { useState } from "react";
import MOCK_DATA from "../mock";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    //  1. 이미 선택된 포켓몬인지 확인: find함수 =>
    const selectedCard = selectedPokemon.find((p) => p.id === pokemon.id);
    // 1.1  맞으면 alert 메시지
    if (selectedCard) {
      return alert("이미 선택된 카드입니다.");
    }
    //  2. 최대 6개의 포켓몬만 선택할 수 있도록 alert 메시지
    if (selectedPokemon.length >= 6) {
      return alert("최대 6개까지 선택이 가능합니다.");
    }

    //  3. 포켓몬 추가(set)
    setSelectedPokemon((prev) => [...prev, pokemon]);
  };

  const removePokemon = (pokemon) => {
    // filter이용하여 선택된 카드 제거
    setSelectedPokemon((prev) => prev.filter((p) => p.id !== pokemon.id));
  };

  return (
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        removePokemon={removePokemon}
      />
      <PokemonList pokemonList={MOCK_DATA} addPokemon={addPokemon} />
    </div>
  );
};

export default Dex;
