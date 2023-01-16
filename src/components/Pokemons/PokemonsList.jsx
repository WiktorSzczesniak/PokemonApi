import React, { useState } from "react";
import "../../../UI/PokemonsList.css";
import ButtonLoadMore from "./ButtonLoadMore";
function PokemonList(props) {
  const Pokemons = props.Pokemons;
  const [poke, setPoke] = useState(20);
  const maxPokemons = Pokemons.filter((item, index) => index < poke);

  function handleMorePokemons() {
    setPoke(poke + 20);
    console.log(poke);
  }

  return (
    <div className="Main">
      <div className="list">{maxPokemons}</div>
      {poke < Pokemons.length && (
        <ButtonLoadMore onLoadMore={handleMorePokemons} />
      )}
    </div>
  );
}

export default PokemonList;
